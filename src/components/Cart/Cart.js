import React, {useState} from 'react'
import Container from '../container/Container'
import CartItem from './CartItem/CartItem'
import TotalAmount from './CartElements/TotalAmount'
import CartButtons from './CartElements/CartButtons'
import './Cart.css'

export default function Cart(props) {
    // todo: handleItemUpdate & items must be in app js
    let items = [
        { itemName: "Sushi", itemPrice: 11.45, itemQuantity: 2 },
        { itemName: "Pizza", itemPrice: 14, itemQuantity: 3},
    ]

    const [cartItems, setCartItems] = useState(items)

    const handleItemUpdate = (updatedItem) => {
        // todo: remove item if quantity is 0
        let index = -1;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].itemName === updatedItem.itemName) {
                index = i;
                break;
            }
        }
        let updatedCartItems = [...cartItems];
        if (updatedItem.itemQuantity === 0){
            updatedCartItems = [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
        }
        else {
            updatedCartItems[index] = updatedItem;
        }
        setCartItems(updatedCartItems);
    };

    return (
    <>
        <div className={props.state ? 'overlay overlay-visible' : 'overlay overlay hidden'}
             onClick={() => props.setModal(false)}></div>
    <Container name={props.state? 'cart-modal-block' : 'cart-modal-none'}>
        {cartItems.map((item, index) => (
            <CartItem key={index} item={item} onItemUpdate={handleItemUpdate} />
        ))}
        <TotalAmount cartItems={cartItems}/>
        <CartButtons setModal={props.setModal} />
    </Container>
    </>
    )
}
