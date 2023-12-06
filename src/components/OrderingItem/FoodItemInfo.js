import "./FoodItemInfo.css"
const FoodItemInfo = (props) => {
    return (
        <div className=".food_items-container">
            <ul >
                <li><strong>{props.food.foodName}</strong></li>
                <li><i>{props.food.foodDescription}</i></li>
                <li style={{
                    color: "orange",
                    fontWeight: 'bold'
                }}>{props.food.foodPrice}</li>
            </ul>
        </div >)
}
export default FoodItemInfo