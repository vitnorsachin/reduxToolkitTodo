// Step 4. useSelector, useDispatch & removeTodo
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editingTodoId, setEditingTodoId] = useState(null);
  const [newTodoText, setNewTodoText] = useState("");

  const handleEditClick = (todo) => {
    setEditingTodoId(todo.id);
    setNewTodoText(todo.text); // Initialize the input with current todo text
  };

  const handleSaveClick = (id) => {
    dispatch(updateTodo({ id, newText: newTodoText }));
    setEditingTodoId(null); // Exit edit mode
    setNewTodoText(""); // Clear the input
  };

  return (
    <>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {editingTodoId === todo.id ? (
                // Render input field when editing
                <input
                  type="text"
                  value={newTodoText}
                  onChange={(e) => setNewTodoText(e.target.value)}
                />
              ) : (
                // Render todo text normally
                <span>{todo.text}</span>
              )}

              <div className="btn-group">
                {editingTodoId === todo.id ? (
                  // Show Save button when editing
                  <button onClick={() => handleSaveClick(todo.id)}>Save</button>
                ) : (
                  // Show Edit button when not editing
                  <button onClick={() => handleEditClick(todo)}>✏️</button>
                )}
                {/* Keep the remove button */}
                <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
