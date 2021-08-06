import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  UPDATE_MY_LIST,
} from "../reducers/types";
export const addTodo = (todoItem) => {
  return { type: ADD_TODO, data: todoItem };
};
export const deleteTodo = (todoIndex) => ({
  type: DELETE_TODO,
  data: todoIndex,
});
export const updateTodo = (todo, todoIndex) => ({
  type: UPDATE_TODO,
  data: todo,
  index: todoIndex,
});
export const updateMyList = (todoList) => ({
  type: UPDATE_MY_LIST,
  data: todoList,
});
