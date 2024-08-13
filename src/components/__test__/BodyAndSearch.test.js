import Body from "../Body";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { resList } from "../../../config/MOCK_DASHBOARD_DATA";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(resList)
    })
})
test("should render Body component", async () => {
    await act(async() => { 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    })

    const topResBtn = screen.getByRole("button", { name: "Top Rated Restaurants"})
    expect(topResBtn).toBeInTheDocument();
})

it("should search restaurant typed", async() => {
    await act(async() => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    });

    const allDivs = screen.getAllByTestId("resCard");
    expect(allDivs.length).toBe(20)

    const searchResInput = screen.getByTestId("searchResInput");
    fireEvent.change(searchResInput, {
        target: {
            value: "Burger"
        }
    })
    const resultDivs = screen.getAllByTestId("resCard");
    expect(resultDivs.length).toBe(2)
})

it("should show top rated restaurants", async() => {
    await act(async() => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    });
    const topResBtn = screen.getByRole("button", { name: "Top Rated Restaurants"});
    fireEvent.click(topResBtn);
    const resultDivs = screen.getAllByTestId("resCard");
    expect(resultDivs.length).toBe(5)
})