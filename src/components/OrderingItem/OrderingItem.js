import Container from "../container/Container";
import "./OrderingItem.css";
import React from "react";
import FoodItemInfo from "./FoodItemInfo";

const OderingItem = (props) => {
  return (
    <Container name="food-item">
      <FoodItemInfo food={props.food}></FoodItemInfo>
      <Container name="button-container">
        <div>
          <label>Amount&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="number" min="0" />
        </div>
        <button> + Add </button>
      </Container>
    </Container>
  );
};

export default OderingItem;
