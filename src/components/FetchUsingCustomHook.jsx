import React from "react";
import useFetch from "./useFetch";

const FetchUsingCustomHook = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
      {data &&
        data.map((item) => {
          return <h1 key={item.id}>{item.name}</h1>;
        })}
    </div>
  );
};

export default FetchUsingCustomHook;
