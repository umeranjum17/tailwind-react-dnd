import { ADD_TODO, DELETE_TODO, UPDATE_TODO, UPDATE_MY_LIST } from "../types";
const initialState = {
  list: [],
  isFetching: false,
  isError: false,
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.data],
      };
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((_, i) => i != action.data),
      };
    case UPDATE_TODO:
      console.log(action);
      return {
        ...state,
        list: [
          ...state.list.map((l, i) => {
            if (i != action.index) {
              return l;
            } else return action.data;
          }),
        ],
      };
    case UPDATE_MY_LIST:
      console.log(action);
      return {
        ...state,
        list: action.data,
      };
    default:
      return state;
  }
};

export default todo;
