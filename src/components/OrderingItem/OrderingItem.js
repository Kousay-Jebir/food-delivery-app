import Container from "../container/Container";
import "./OrderingItem.css";
import React from "react";
import FoodItemInfo from "./FoodItemInfo";
import { useContext } from "react";
import orderContext from "../../order-context";
import CartItemInfo from "../Cart/CartItem/CartItemInfo";
import CartItemButtons from "../Cart/CartItem/CartItemButtons";

const OderingItem = (props) => {

  const itemOrder = useContext(orderContext);
  function getPrice(price) {
    // If price is empty or not a string, return 0
    if (!price || typeof price !== 'string') {
      return 0;
    }

    const numericValue = parseFloat(price.replace('$', ''));

    // Check if numericValue is a valid number
    if (!isNaN(numericValue)) {
      return numericValue;
    }

    // Default to 0 if numericValue is not a valid number
    return 0;
  }

  // function foodItemAmoundHandler(event) {
  //   if (props.food.foodName === "Sushi") {
  //     itemOrder.setOrder({
  //       ...itemOrder.order,
  //       sushiAmount: event.target.value,
  //       totalPrice: itemOrder.order.totalPrice + getPrice(props.food.foodPrice)
  //     })
  //   }
  //   else if (props.food.foodName === "Schnitzel") {
  //     itemOrder.setOrder({
  //       ...itemOrder.order,
  //       schnitzelAmount: event.target.value,
  //       totalPrice: itemOrder.order.totalPrice + getPrice(props.food.foodPrice)
  //     })
  //   }
  //   else if (props.food.foodName === "Barbecue Burger") {
  //     itemOrder.setOrder({
  //       ...itemOrder.order,
  //       barbercueBurgerAmount: event.target.value,
  //       totalPrice: itemOrder.order.totalPrice + getPrice(props.food.foodPrice)
  //     })
  //   }
  //   else {
  //     itemOrder.setOrder({
  //       ...itemOrder.order,
  //       greenBowlAmount: event.target.value,
  //       totalPrice: itemOrder.order.totalPrice + getPrice(props.food.foodPrice)
  //     })
  //   }
  // }
  function foodItemAmoundHandler(event) {
    // Get the value from the input field
    const inputValue = event.target.value;

    // Check if the input value is empty
    if (inputValue.trim() === "") {
      // If it's empty, return early and do not process further
      return;
    }
    const foodAmount = parseInt(event.target.value, 10);
    const foodPrice = getPrice(props.food.foodPrice);

    let updatedOrder = { ...itemOrder.order };

    if (props.food.foodName === "Sushi") {
      updatedOrder = {
        ...updatedOrder,
        sushiAmount: foodAmount,
        totalPrice: itemOrder.order.totalPrice + (foodAmount - updatedOrder.sushiAmount) * foodPrice,
      };
    }
    else if (props.food.foodName === "Schnitzel") {
      updatedOrder = {
        ...updatedOrder,
        schnitzelAmount: foodAmount,
        totalPrice: itemOrder.order.totalPrice + (foodAmount - updatedOrder.schnitzelAmount) * foodPrice,
      };
    }
    else if (props.food.foodName === "Barbecue Burger") {
      updatedOrder = {
        ...updatedOrder,
        barbecueBurgerAmount: foodAmount,
        totalPrice: itemOrder.order.totalPrice + (foodAmount - updatedOrder.barbecueBurgerAmount) * foodPrice,
      };
    }
    else {
      updatedOrder = {
        ...updatedOrder,
        greenBowlAmount: foodAmount,
        totalPrice: itemOrder.order.totalPrice + (foodAmount - updatedOrder.greenBowlAmount) * foodPrice,
      };
    }
    // ... (similar updates for other food items)

    // Calculate the total number of items
    const totalItems =
      (parseInt(updatedOrder.sushiAmount) || 0) +
      (parseInt(updatedOrder.schnitzelAmount) || 0) +
      (parseInt(updatedOrder.greenBowlAmount) || 0) +
      (parseInt(updatedOrder.barbecueBurgerAmount) || 0);

    updatedOrder.numberOfItems = totalItems;

    itemOrder.setOrder(updatedOrder);
  }

  // console.log(itemOrder.order); juste bech ndebuggi

  function getFoodQuantity() {
    if (props.food.foodName === "Sushi") {
      return itemOrder.order.sushiAmount;
    }
    else if (props.food.foodName === "Schnitzel") {
      return itemOrder.order.schnitzelAmount;
    }
    else if (props.food.foodName === "Barbecue Burger") {
      return itemOrder.order.barbecueBurgerAmount;
    }
    return itemOrder.order.greenBowlAmount;
  }
  function addToCartHandler() {
    const quantity = getFoodQuantity();

    // props.addHandler(
    //   <Container name='cart-item'>
    //     <CartItemInfo key={Math.random()} foodName={props.food.foodName} foodQuantity={quantity} foodPrice={props.food.foodPrice} />
    //     <CartItemButtons />
    //     <hr></hr>
    //   </Container>)
    props.addHandler({
      key: Math.random(),
      foodName: props.food.foodName,
      foodQuantity: quantity,
      foodPrice: props.food.foodPrice
    })

  }




  return (
    <Container name="food-item">
      <FoodItemInfo food={props.food}></FoodItemInfo>
      <Container name="button-container">
        <div>
          <label>Amount&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input onChange={foodItemAmoundHandler} type="number" min="0" />
        </div>
        <button onClick={addToCartHandler}> + Add </button>
      </Container>
    </Container>
  );
};

export default OderingItem;