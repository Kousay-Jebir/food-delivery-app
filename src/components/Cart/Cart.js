import React from 'react'
import Container from '../container/Container'
import CartItem from './CartItem/CartItem'
import TotalAmount from './CartElements/TotalAmount'
import CartButtons from './CartElements/CartButtons'
import './Cart.css'

export default function Cart() {
  return (
    <Container name='cart'>
        <CartItem/>
        <CartItem/>
        <TotalAmount/>
        <CartButtons/>
    </Container>
  )
}
