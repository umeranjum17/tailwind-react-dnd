import { combineReducers } from "redux";
import UserReducer from "./user";
import TodoReducer from "./todo";

export default combineReducers({
  todos: TodoReducer,
  users: UserReducer,
});
