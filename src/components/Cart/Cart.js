import React from 'react'
import Container from '../container/Container'
import CartItem from './CartItem/CartItem'
import TotalAmount from './TotalAmount'
import CartButtons from './CartButtons'
import './Cart.css'

export default function Cart() {
  return (
    <Container name='cart'>
        <CartItem/>
        <TotalAmount/>
        <CartButtons/>
    </Container>
  )
}
