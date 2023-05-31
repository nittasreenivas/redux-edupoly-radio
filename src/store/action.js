export function Increment() {
  return {
    type: "INC"
  };
}

export function Decrement() {
  return {
    type: "DEC"
  };
}

export function Reset() {
  return {
    type: "RESET"
  };
}

export function DelTodo(task) {
  return {
    type: "DEL_TODO",
    payload: task
  };
}

export function DoneTodo(task) {
  return {
    type: "DONE_TODO",
    payload: task
  };
}

export function addTask(newTask) {
  return {
    type: "ADD_TASK",
    payload: newTask
  };
}
