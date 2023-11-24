import "./FoodItemInfo.css"
const FoodItemInfo = (props) => {
    return (
        <ul>
            <li>{props.food.foodName}</li>
            <li>{props.food.foodDescription}</li>
            <li>{props.food.foodPrice}</li>
        </ul>)
}
export default FoodItemInfo