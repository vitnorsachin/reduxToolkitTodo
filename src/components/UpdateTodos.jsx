// step 5.
import React, { useState } from "react";
import { useDispatch } from "react-redux"; // 🟢
import { addTodo } from "../features/todo/todoSlice";

const UpdateTodos = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  return <div>UpdateTodos</div>;
};

export default UpdateTodos;
