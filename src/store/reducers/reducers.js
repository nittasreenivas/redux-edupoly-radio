import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import todoReducer from "./todo.reducers";

const reducers = combineReducers({
  todos: todoReducer,
  counter: counterReducer
});

export default reducers;
