import {
  DELETE_TODO,
  TOGGLE_TODO,
  ADD_TODO,
  DELETE_COMPLEATED_TODOS,
} from "./actionTypes";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

const deleteCompletedTodos = () => {
  return {
    type: DELETE_COMPLEATED_TODOS,
  };
};
