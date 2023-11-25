import FoodItemInfo from "./components/OrderingItem/FoodItemInfo";
import OderingItem from "./components/OrderingItem/OrderingItem";
import Header from "./components/Header/Header";
import Container from "./components/container/Container";
import Cart from "./components/Cart/Cart";
import './App.css';
import Description from "./components/Description/Description";
import "./components/container/Container.css"
import { useState } from "react";

function App() {
  const [modal,setModal]=useState(false);
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

  return (
   
    // Code el App.js 
    // Matensewech testamlou <> </> fi 3outh <div> ki fel html mta el component kima hka 
    // essayed mta el formatin 
    <>
      { /*<Container name="food_items">Exemple ou bara</Container>  exemple este3mel component container */}
      
      <Header setModal={setModal}/> 
      <Description />
      <Cart state={modal} setModal={setModal}/>
      <div className="food_items-container">
      <Container name="food_items">
        <OderingItem food={foods[0]}></OderingItem>
        <hr></hr>
        <OderingItem food={foods[1]}></OderingItem>
        <hr></hr>
        <OderingItem food={foods[2]}></OderingItem>
        <hr></hr>
        <OderingItem food={foods[3]}></OderingItem>
        <hr></hr>
      </Container>
      </div>

    </>
  );

}

export default App;
