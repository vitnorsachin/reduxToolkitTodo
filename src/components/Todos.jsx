// Step 4. useSelector, useDispatch & removeTodo
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
              {/* <button onClick={dispatch(removeTodo(id))}>X</button> */}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todos;