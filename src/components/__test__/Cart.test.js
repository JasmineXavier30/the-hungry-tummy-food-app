import MOCK_DATA from "../__mocks__/resMenuMock.json";
import { BrowserRouter } from "react-router-dom";
import RestaurantInfo from "../RestaurantInfo";
import { act, render, screen, fireEvent } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import Header from "../Header";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
)

it("Should test load of res menu", async() => {
    await act(async() => {
        render(
            <Provider store={appStore}>
                <RestaurantInfo />
            </Provider>
        )
    });

    const accordionHeaderText = screen.getByText("Chandni Chowk Ki Chaat (11)");
    fireEvent.click(accordionHeaderText);
    
    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(11)
})

test("should click add button", async() => {
    await act(async() => {
        render(
            <Provider store={appStore} >
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
                <RestaurantInfo />
                <Cart />
            </Provider>
        )
    })

    const accordionHeaderText = screen.getByText("Chandni Chowk Ki Chaat (11)");
    fireEvent.click(accordionHeaderText);

    expect(screen.getByText("Cart-0")).toBeInTheDocument()

    const addBtns = screen.getAllByText("Add");
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart-1")).toBeInTheDocument();

    // should be shown in cart page
    expect(screen.getAllByTestId("foodItems").length).toBe(12); // 11 from res info + 1 from cart

    const clearCart = screen.getByText("Clear Cart");
    fireEvent.click(clearCart);

    expect(screen.getByText("No items to show. Please add items.")).toBeInTheDocument();
})