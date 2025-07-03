import React, { useReducer } from "react";

const UserReducerCounter = () => {
  const reducer = (state, action) => {
    if (action.type === "Increment") {
      return state + 1;
    }
    if (action.type === "Decrement") {
      return state - 1;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>Counter using useReducer hook</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "Increment" })}>+</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
    </div>
  );
};

export default UserReducerCounter;
