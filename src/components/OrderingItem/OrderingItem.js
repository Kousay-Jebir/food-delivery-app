import Container from "../container/Container";
import "./OrderingItem.css";
import React from "react";

const OderingItem = () => {
  return (
    <Container name="button-container">
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
