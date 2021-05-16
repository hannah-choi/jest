import { render } from "@testing-library/react";
import List from "./List";

describe("The List component", () => {
    it("should render todo items with text", () => {
        const todos = [{ title: "foo", id: "bar" }];
        const { getByText } = render(<List todos={todos} />);

        getByText(todos[0].title);
    });
});
