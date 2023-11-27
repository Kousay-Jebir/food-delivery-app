import Container from "../container/Container";
import "./OrderingItem.css";
import React, {useState} from "react";
import FoodItemInfo from "./FoodItemInfo";

const OderingItem = (props) => {
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        if (quantity > 0){
            const newItem = {
                itemName: props.food.foodName,
                itemPrice: props.food.foodPrice,
                itemQuantity: quantity,
            }

            props.onItemUpdate(newItem, true);

            setQuantity(0);
        }
    }

    return (
    <Container name="food-item">
      <FoodItemInfo food={props.food}></FoodItemInfo>
      <Container name="button-container">
        <div>
          <label>Amount&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="number" min="0" value={quantity} onChange={(event) => setQuantity(parseInt(event.target.value, 10))}
              />
        </div>
        <button onClick={handleAddToCart}> + Add </button>
      </Container>
    </Container>
    );
};

export default OderingItem;
