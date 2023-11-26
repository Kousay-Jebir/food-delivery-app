import "./CartButton.css";
import Container from "../container/Container";
import cart_image from "./cart_image.png";
import { useContext } from "react";
import orderContext from "../../order-context";

const CartButton = ({ setModal }) => {
    const itemOrder = useContext(orderContext);


    const handleCartButtonClick = () => {
        setModal(true);
    };
    return (
        <Container containerType="button" name="cart_button_container" onClick={handleCartButtonClick}>
            <img id="cart_image" src={cart_image} />
            <div className="cart_button_title">Your Cart</div>
            <div className="cart_button_counter">{itemOrder.order.numberOfItems}</div>
        </Container>
    )
}
export default CartButton