import React, { useState } from "react";

const TimeUpdate = () => {
  let now = new Date().toLocaleTimeString();
  const [updateTime, setUpdateTime] = useState(now);

  function updateNow(){
    let nowTime = new Date().toLocaleTimeString();
    setUpdateTime(nowTime);
  };
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1>{updateTime}</h1>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px",
          borderRadius: "10px",
        }}
        onClick={updateNow}
      >
        Get time
      </button>
    </div>
  );
};

export default TimeUpdate;
