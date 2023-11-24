import "./CartButton.css";
import Container from "../container/Container";
import cart_image from "./cart_image.png";

const CartButton = () => {
    return (
        <Container name="cart_button_container">
            <img id="cart_image" src={cart_image} />
            <div className="cart_button_title">Your Cart</div>
            <div className="cart_button_counter">0</div>
        </Container>
    )
}
export default CartButton