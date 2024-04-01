// reducers.js
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
  UPDATE_ITEM,
  EDIT,
} from "./actionTypes";

const getlocalStorage = () => {
  let list = localStorage.getItem("todos");
  console.log(list);
  if (list === undefined) {
    return [];
  } else 
  {
    return JSON.parse(list);
  }
};

const initialState = {
  todos: getlocalStorage(),
  filter: "ALL",
  searchTerm: "",
  edit: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
        filter: state.filter,
        searchTerm: state.searchTerm,
        edit: "",
      };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
        edit: "",
      };

    case REMOVE_TODO:
      return {
        todos: state.todos.filter((todo, index) => index !== action.payload.id),
        filter: state.filter,
        searchTerm: state.searchTerm,
        edit: "",
      };

    case MARK_COMPLETED:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
        edit: "",
      };

    case MARK_INCOMPLETE:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
        edit: "",
      };

    case FILTER_TODOS:
      return {
        todos: state.todos,
        filter: action.payload.filter,
        searchTerm: state.searchTerm,
        edit: "",
      };

    case UPDATE_SEARCH_TERM:
      return {
        todos: state.todos,
        filter: state.filter,
        searchTerm: action.payload.searchTerm,
        edit: "",
      };

    case MARK_ALL_COMPLETED:
      return {
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        filter: state.filter,
        searchTerm: state.searchTerm,
        edit: "",
      };

    case UPDATE_ITEM:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
        edit: "",
      };
    case EDIT:
      return {
        todos: state.todos,
        filter: state.filter,
        searchTerm: state.searchTerm,
        edit: action.payload.index,
      };

    default:
      return state;
  }
};

export default todoReducer;
