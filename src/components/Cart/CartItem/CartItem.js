import React from 'react'
import Container from '../../container/Container'
import CartItemInfo from './CartItemInfo'
import CartItemButtons from './CartItemButtons'
import './CartItem.css'

export default function CartItem() {
  return (
    <Container name='cart-item'>
        <CartItemInfo/>
        <CartItemButtons/>
        <hr></hr>
    </Container>
  )
}
