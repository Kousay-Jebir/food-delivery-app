import Container from "../container/Container";
import "./OrderingItem.css";
import React from "react";
import FoodItemInfo from "./FoodItemInfo";

const OderingItem = (props) => {
  return (
    <Container name="button-container">
      <FoodItemInfo food={props.food}></FoodItemInfo>
      <div>
        <label>Amount&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="number" min="0" />
      </div>
      <button> + Add </button>
      <hr></hr>
    </Container>
  );
};

export default OderingItem;
