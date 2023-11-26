import FoodItemInfo from "./components/OrderingItem/FoodItemInfo";
import OderingItem from "./components/OrderingItem/OrderingItem";
import Header from "./components/Header/Header";
import Container from "./components/container/Container";
import Cart from "./components/Cart/Cart";
import './App.css';
import Description from "./components/Description/Description";
import "./components/container/Container.css"
import { useState } from "react";
import orderContext from "./order-context";
import CartItemInfo from "./components/Cart/CartItem/CartItemInfo";
import CartItemButtons from "./components/Cart/CartItem/CartItemButtons";

function App() {


  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState({
    sushiAmount: 0,
    schnitzelAmount: 0,
    barbecueBurgerAmount: 0,
    greenBowlAmount: 0,
    totalPrice: 0,
    numberOfItems: 0,
  });
  const foods = [
    {
      foodName: "Sushi",
      foodDescription: "Finest fish and veggies",
      foodPrice: "$22.99"
    },
    {
      foodName: "Schnitzel",
      foodDescription: "A german specialty!",
      foodPrice: "$16.50"
    },
    {
      foodName: "Barbecue Burger",
      foodDescription: "American,raw,meaty",
      foodPrice: "$12.99"
    },
    {
      foodName: "Green Bowl",
      foodDescription: "Healthy...and green...",
      foodPrice: "$18.99"
    }
  ]
  const [cartItems, setCartItems] = useState([]);
  // function getCartItemInfo(cartItemInfo) {

  //   setCartItems([...cartItems, cartItemInfo])
  //   console.log(cartItems);

  // }

  function getCartItemInfo(cartItemInfo) {
    setCartItems((prevCartItems) => {
      const existingIndex = prevCartItems.findIndex((item) => item.foodName === cartItemInfo.foodName);

      if (existingIndex !== -1) {
        // Item exists, update the quantity
        const updatedCart = [...prevCartItems];
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          foodQuantity: updatedCart[existingIndex].foodQuantity + cartItemInfo.foodQuantity,
        };
        return updatedCart;
      } else {
        // Item doesn't exist, add a new item to the cart
        return [...prevCartItems, cartItemInfo];
      }
    });
  }


  return (

    // Code el App.js 
    // Matensewech testamlou <> </> fi 3outh <div> ki fel html mta el component kima hka 
    // essayed mta el formatin 
    <>
      { /*<Container name="food_items">Exemple ou bara</Container>  exemple este3mel component container */}
      <orderContext.Provider value={{ order: order, setOrder: setOrder }}>
        <Header setModal={setModal} />
        <Description />
        <Cart items={cartItems} state={modal} setModal={setModal} />
      </orderContext.Provider >

      <div className="food_items-container">
        <orderContext.Provider value={{ order: order, setOrder: setOrder }}>
          <Container name="food_items">
            <OderingItem addHandler={getCartItemInfo} food={foods[0]}></OderingItem>
            <hr></hr>
            <OderingItem addHandler={getCartItemInfo} food={foods[1]}></OderingItem>
            <hr></hr>
            <OderingItem addHandler={getCartItemInfo} food={foods[2]}></OderingItem>
            <hr></hr>
            <OderingItem addHandler={getCartItemInfo} food={foods[3]}></OderingItem>
            <hr></hr>
          </Container>
        </orderContext.Provider>

      </div >

    </>
  );

}

export default App;