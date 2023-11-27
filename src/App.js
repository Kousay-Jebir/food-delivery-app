import FoodItemInfo from "./components/OrderingItem/FoodItemInfo";
import OderingItem from "./components/OrderingItem/OrderingItem";
import Header from "./components/Header/Header";
import Container from "./components/container/Container";
import Cart from "./components/Cart/Cart";
import './App.css';
import Description from "./components/Description/Description";
import "./components/container/Container.css"
import { useState, useEffect } from "react";

function App() {
  const [modal,setModal]=useState(false);
  const [cartItems, setCartItems] = useState([])
  const [count, setCount] = useState(0); // This count is for the cart button

  // This handler is for both: cart menu and main page: if add is true ==> the item is coming from the main page
  const handleItemUpdate = (item, add=false) => {
    let index = -1;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].itemName === item.itemName) {
        index = i;
        break;
      }
    }
    let updatedCartItems = [...cartItems];
    if (index === -1){
      updatedCartItems = [...cartItems, item]
    }
    else if (item.itemQuantity === 0){
      updatedCartItems = [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
    }
    else {
      if (add) { // if add is true, and the item is already in the cart, we add its count
        updatedCartItems[index].itemQuantity += item.itemQuantity;
      }
      else{
        updatedCartItems[index] = item;
      }
    }
    setCartItems(updatedCartItems);
  };

  const calculateTotalQuantity = () => {
    let quantity = 0;
    for (let i = 0; i < cartItems.length; i++){
      quantity += cartItems[i].itemQuantity;
    }
    return quantity;
  }

  useEffect(() => {
    setCount(calculateTotalQuantity)
  }, [cartItems]);

  const foods = [
    {
      foodName: "Sushi",
      foodDescription: "Finest fish and veggies",
      foodPrice:  22.99
    },
    {
      foodName: "Schnitzel",
      foodDescription: "A german specialty!",
      foodPrice: 16.5
    },
    {
      foodName: "Barbecue Burger",
      foodDescription: "American,raw,meaty",
      foodPrice: 12.99
    },
    {
      foodName: "Green Bowl",
      foodDescription: "Healthy...and green...",
      foodPrice: 18.99
    }
  ]

  return (
    <>
      <Header setModal={setModal} count={count}/>
      <Description />
      <Cart state={modal} setModal={setModal} cartItems={cartItems} handleItemUpdate={handleItemUpdate} />
      <div className="food_items-container">
        <Container name="food_items">
          {foods.map((food, index) => (
              <>
                <OderingItem key={index} food={food} onItemUpdate={handleItemUpdate} />
                <hr></hr>
              </>
          ))}
        </Container>
      </div>

    </>
  );

}

export default App;
