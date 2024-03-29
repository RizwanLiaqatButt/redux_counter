import { createStore } from "redux";

const initialState = {
  count: 3
};

// reducer accepts two things current state and action
const reducer = (state = initialState, action) => {
  console.log("reducer running", action);
  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, { count: state.count + 1 });
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
