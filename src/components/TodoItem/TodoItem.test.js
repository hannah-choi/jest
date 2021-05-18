import TodoItem from "./TodoItem";
import { render, fireEvent } from "@testing-library/react";

describe("The TodoItem Component", () => {
  it("should show the todo when the data is loaded", async () => {
    const todo = { title: "foo", id: "bar" };
    const { getByText } = render(<TodoItem title={todo.title} key={todo.id} />);
    getByText(todo.title);
  });

  it("should call deleteTodo when the delete button is clicked", () => {
    const deleteTodo = jest.fn();
    const { getByTitle } = render(<TodoItem deleteTodo={deleteTodo} />);
    fireEvent.click(getByTitle("delete"));
    expect(deleteTodo).toHaveBeenCalled();
  });
});
