import React from 'react'
import Container from '../container/Container';
import './TotalAmount.css';


export default function TotalAmount() {
    const totalAmount=45.98;
    return (
    <Container name="total-amount-container">
      <div className='total-amount-title'>Total Amount</div>
      <div className='total-amount-amount'>${totalAmount}</div>
    </Container>
  )
}


