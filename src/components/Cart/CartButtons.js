import React from 'react'
import './CartButtons.css'
import Container from '../container/Container'

export default function CartButtons() {
  return (
    <div className='cart-buttons-container'>
      <button className='close-button'>Close</button>
      <button className='order-button'>Order</button>
    </div>
  )
}
