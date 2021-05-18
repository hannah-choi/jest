import React, { useState } from "react";
import View from "../View/View";

export default function TodoItem({ title, id, deleteTodo, modifyTodo }) {
  const [edit, setEdit] = useState(false);

  return (
    <li>
      <View
        edit={edit}
        id={id}
        modifyTodo={modifyTodo}
        setEdit={setEdit}
        title={title}
        deleteTodo={deleteTodo}
      />
    </li>
  );
}
