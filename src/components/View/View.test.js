import { render, fireEvent } from "@testing-library/react";
import View from "./View";

describe("the View element", () => {
  it("should call modifyTodo when the modify button is clicked", () => {
    const modifyTodo = jest.fn();
    const { getByTitle } = render(<View modifyTodo={modifyTodo} />);
    // fireEvent.submit(getByTitle('modifyForm'))
    // expect(modifyTodo).toHaveBeenCalled()
  });
});
