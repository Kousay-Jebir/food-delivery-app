import React from 'react'
import Container from '../../container/Container';
import './TotalAmount.css';


export default function TotalAmount({cartItems}) {
    let totalAmount = 0;
    for (let i = 0; i < cartItems.length; i++){
        totalAmount += cartItems[i].itemPrice * cartItems[i].itemQuantity
    }
    totalAmount = totalAmount.toFixed(2);
    return (
    <Container name="total-amount-container">
      <div className='total-amount-title'>Total Amount</div>
      <div className='total-amount-amount'>${totalAmount}</div>
    </Container>
  )
}


