import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("The button component", () => {
    it("should render properly", () => {
        const { getByTestId } = render(<Button />);
        const button = getByTestId("button");
        expect(button).toBeTruthy();
    });

    it("should change the innerText when clicked", () => {
        const { getByTestId } = render(<Button />);
        const button = getByTestId("button");
        expect(button.innerHTML).toEqual("click");
        fireEvent.click(button);
        expect(button.innerHTML).toEqual("clicked");
    });
});
