import React, { useReducer } from "react";

const UserReducerCounter = () => {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    // if (action.type === "Increment") {
    //   return state + 1;
    // }
    // if (action.type === "Decrement") {
    //   return state - 1;
    // }
    // if (action.type === "Reset") {
    //   return (state = 0);
    // }

    switch (action.type) {
      case "Increment":
        return { ...state, count: state.count + 1 };
      case "Decrement":
        return { ...state, count: state.count - 1 };
      case "Reset":
        return { count: 0 };

      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter using useReducer hook</h1>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "Increment" })}>+</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "Reset" })}>RESET</button>
    </div>
  );
};

export default UserReducerCounter;
