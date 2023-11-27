import React from 'react'
import Container from '../container/Container'
import CartItem from './CartItem/CartItem'
import TotalAmount from './CartElements/TotalAmount'
import CartButtons from './CartElements/CartButtons'
import './Cart.css'

export default function Cart(props) {
    let cartItems = [
        { itemName: "Sushi", itemPrice: 11.45, itemQuantity: 2 }
    ];
    return (
    <>
        <div className={props.state ? 'overlay overlay-visible' : 'overlay overlay hidden'}
             onClick={() => props.setModal(false)}></div>
    <Container name={props.state? 'cart-modal-block' : 'cart-modal-none'}>
        <CartItem cartItems={cartItems} />
        <TotalAmount cartItems={cartItems} />
        <CartButtons setModal={props.setModal} />
    </Container>
    </>
    )
}
