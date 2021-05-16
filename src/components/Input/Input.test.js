import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("The input component", () => {
    it("should render properly", () => {
        const { getByTitle } = render(<Input />);
        const input = getByTitle("input");
        expect(input).toBeTruthy();
    });

    it("should change its value onChangeEvent", () => {
        const { getByTitle } = render(<Input />);
        const input = getByTitle("input");
        fireEvent.change(input, { target: { value: "test" } });
        expect(input.value).toBe("test");
    });
});
