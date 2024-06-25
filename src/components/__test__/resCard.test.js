import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../__mocks__/resCardMock.json"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";

it("should render Restaurantcard with props", () => {
    render(<RestaurantCard res={MOCK_DATA} />);
    const resName = screen.getByText("Chinese Wok");
    expect(resName).toBeInTheDocument()
});

test("should render withPromotedLabel", () => {
    const PromotedResCard = withPromotedLabel(RestaurantCard);
    render(<PromotedResCard res={MOCK_DATA}/>);
    const resName = screen.getByText("Chinese Wok");
    expect(resName).toBeInTheDocument();
})