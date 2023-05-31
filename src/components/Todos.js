import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DelTodo, DoneTodo, addTask } from "../store/action";
const Todos = (props) => {
  console.log("props::", props);
  const [newTask, setNewTask] = useState({
    title: "",
    status: false,
    id: uuidv4()
  });
  const [filterTodos, setFilterTodos] = useState([]);
  const [filterKey, setFilterKey] = useState("all");

  const handleInput = (e) => {
    setNewTask({ ...newTask, title: e.target.value, status: false });
  };
  useEffect(() => {
    if (filterKey === "all") {
      setFilterTodos(props.Todos);
    }
    if (filterKey === "completed") {
      let temp = props.Todos.filter((task) => {
        return task.status === true;
      });
      setFilterTodos([...temp]);
    }
    if (filterKey === "not-completed") {
      let temp1 = props.Todos.filter((task) => {
        return task.status === false;
      });
      setFilterTodos([...temp1]);
    }
  }, [props.Todos, filterKey]);
  return (
    <div className="vasu">
      <h4> Todos:({filterTodos.length})</h4>
      <input type="text" placeholder="enter todo" onChange={handleInput} />
      <button onClick={() => props.add(newTask)}> add</button>
      <div>
        <br />
        <input
          type="radio"
          name="filter"
          value="all"
          onChange={(e) => setFilterKey(e.target.value)}
        />
        ALL
        <input
          type="radio"
          name="filter"
          value="completed"
          onChange={(e) => setFilterKey(e.target.value)}
        />
        Completed
        <input
          type="radio"
          name="filter"
          value="not-completed"
          onChange={(e) => setFilterKey(e.target.value)}
        />
        not-completed
      </div>
      <div>
        {filterTodos.map((task, i) => {
          return (
            <div key={i} className={task.status === true ? "a" : "b"}>
              <span className={task.status === true ? "a" : "b"}>
                {" "}
                {task.title}{" "}
              </span>
              {task.status === true ? (
                <button
                  onClick={() => {
                    props.done(task);
                  }}
                >
                  {" "}
                  Undo
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.done(task);
                  }}
                >
                  {" "}
                  Done{" "}
                </button>
              )}
              <button
                onClick={() => {
                  props.del(task);
                }}
              >
                {" "}
                del
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return state.todos;
}
function mapDispatchToProps(dispatch) {
  return {
    del: (task) => {
      dispatch(DelTodo(task));
    },
    done: (task) => {
      dispatch(DoneTodo(task));
    },
    add: (newTask) => {
      dispatch(addTask(newTask));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
