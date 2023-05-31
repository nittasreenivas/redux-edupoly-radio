import { connect } from "react-redux";
import { Decrement, Increment, Reset } from "../store/action";
const Counter = (props) => {
  console.log("props::", props);
  return (
    <div className="vasu">
      <h3> Count:{props.Count}</h3>
      <button onClick={props.inc}> INC</button>&nbsp;&nbsp;
      <button onClick={props.dec}> DEC</button>&nbsp;&nbsp;
      <button onClick={props.res}> RESET</button>&nbsp;&nbsp;
    </div>
  );
};

function mapStateToProps(state) {
  return state.counter;
}

function mapDispatchToProps(dispatch) {
  return {
    inc: () => {
      dispatch(Increment());
    },
    dec: () => {
      dispatch(Decrement());
    },
    res: () => {
      dispatch(Reset());
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
