import React from "react";

const Products = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Price: {props.price}</p>
    </div>
  );
};

export default Products;
