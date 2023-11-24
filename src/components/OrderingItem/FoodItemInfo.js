import "./FoodItemInfo.css"
const FoodItemInfo = (props) => {
    return (
        <div className=".food_items-container">
        <ul >
            <li>{props.food.foodName}</li>
            <li>{props.food.foodDescription}</li>
            <li>{props.food.foodPrice}</li>
        </ul>
        </div>)
}
export default FoodItemInfo