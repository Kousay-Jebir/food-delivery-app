import React, {useState} from 'react'
import Container from '../container/Container'
import CartItem from './CartItem/CartItem'
import TotalAmount from './CartElements/TotalAmount'
import CartButtons from './CartElements/CartButtons'
import './Cart.css'

export default function Cart(props) {
    return (
    <>
        <div className={props.state ? 'overlay overlay-visible' : 'overlay overlay hidden'}
             onClick={() => props.setModal(false)}></div>
    <Container name={props.state? 'cart-modal-block' : 'cart-modal-none'}>
        {props.cartItems.map((item, index) => (
            <CartItem key={index} item={item} onItemUpdate={props.handleItemUpdate} />
        ))}
        <TotalAmount cartItems={props.cartItems}/>
        <CartButtons setModal={props.setModal} />
    </Container>
    </>
    )
}
