import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  console.log("counter render", props);
  return (
    <div>
      <h1>I am Counter!</h1>
      <p>Count: {props.count} </p>
      <button onClick={props.onIncrementClick}>Counter </button>
    </div>
  );
}

function mapStateToProps(state) {
  console.log("Map State Props", state);
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  console.log("Map dispatch to");
  return {
    onIncrementClick: () => {
      console.log("clicking");
      const action = { type: "INCREMENT" };
      dispatch(action);
    }
  };
}
// this creates new component that hooks map state to our component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
