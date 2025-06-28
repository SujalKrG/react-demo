import React, { useState } from "react";

const CounterApp = () => {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
    }

  return <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
    <h1>{ count }</h1>
    <button onClick={increase} style={{ display: "flex", alignItems: "center" }}>+</button>
    <button onClick={decrease} style={{ display: "flex",  justifyContent: "center"}}>-</button>
  </div>;
};

export default CounterApp;
