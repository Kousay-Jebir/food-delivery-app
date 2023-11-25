import React from 'react'
import Container from '../container/Container'
import CartItem from './CartItem/CartItem'
import TotalAmount from './CartElements/TotalAmount'
import CartButtons from './CartElements/CartButtons'
import './Cart.css'

export default function Cart(props) {
  return (
    <Container name={props.state? 'cart-modal-block' : 'cart-modal-none'}>
        <CartItem/>
        <CartItem/>
        <TotalAmount/>
        <CartButtons setModal={props.setModal}/>
    </Container>
  )
}
