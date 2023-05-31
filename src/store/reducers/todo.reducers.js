import { v4 as uuidv4 } from "uuid";
const initialState = {
  Todos: [
    { title: "eat-biryani", status: false, id: uuidv4() },
    { title: "write-code", status: true, id: uuidv4() },
    { title: "pay-fee", status: false, id: uuidv4() },
    { title: "go-home", status: true, id: uuidv4() }
  ]
};

const todoReducer = (state = initialState, action) => {
  if (action.type === "ADD_TASK") {
    return {
      ...state,
      Todos: [...state.Todos, { ...action.payload }]
    };
  }
  if (action.type === "DEL_TODO") {
    let temp = [...state.Todos];
    temp.splice(action.payload.id, 1);
    return {
      ...state,
      Todos: [...temp]
    };
  }
  if (action.type === "DONE_TODO") {
    let temp1 = [...state.Todos];
    temp1.map((task) => {
      if (task.id === action.payload.id) {
        task.status = !task.status;
        return task;
      } else {
        return task;
      }
    });
    return {
      ...state,
      Todos: [...temp1]
    };
  }
  return state;
};

export default todoReducer;
