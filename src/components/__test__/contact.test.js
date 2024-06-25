import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

/* test("contact component should load", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})
test("placeholder present", () => {
    render(<Contact />);
    const input = screen.getAllByPlaceholderText("name");
    expect(input).toBeInTheDocument();
}) */
it("2 input present", () => {
    render(<Contact />)
    const input_2 = screen.getAllByRole("textbox");
    //console.log(input_2)
    expect(input_2.length).toBe(2)
})