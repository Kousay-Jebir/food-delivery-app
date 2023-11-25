import React from 'react'
import './CartButtons.css'
import Container from '../../container/Container'

export default function CartButtons({setModal}) {
  const handleCloseButtonClick = () => {
    setModal(false);
  }
  return (
    <div className='cart-buttons-container'>
      <button className='close-button' onClick={handleCloseButtonClick}>Close</button>
      <button className='order-button'>Order</button>
    </div>
  )
}
