import React from "react";
import { DELETE_TODO, TOGGLE_TODO } from "../redux/actionTypes";
import { useDispatch, useSelector } from "react-redux";

const ShowData = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="todo-list">
        {todos.map((todo) => (
          <div className="todo-item" key={todo.id}>
            <div className="todo-item-text">{todo.text}</div>
            <div className="todo-item-date">
              {new Date(todo.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })}
            </div>
            <div className="todo-item-checkbox">
              <span>{todo.completed ? "Compleated" : "Not Compleated"}</span>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {
                  dispatch({ type: TOGGLE_TODO, payload: todo.id });
                }}
              />
            </div>
            <div className="todo-item-delete">
              <button
                className="button"
                onClick={() => {
                  dispatch({ type: DELETE_TODO, payload: todo.id });
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowData;
