import CartButton from "./components/CartButton/CartButton";
import FoodItemInfo from "./components/OrderingItem/FoodItemInfo";
import OderingItem from "./components/OrderingItem/OrderingItem";

function App() {
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
      {/* <Container name="food_items">Exemple ou bara</Container>  exemple este3mel component container */}
      <OderingItem food={foods[0]}></OderingItem>
      <OderingItem food={foods[1]}></OderingItem>
      <OderingItem food={foods[2]}></OderingItem>
      <OderingItem food={foods[3]}></OderingItem>

    </>
  );
}

export default App;
