import React from 'react'
import Container from '../container/Container';
import './TotalAmount.css';


export default function TotalAmount() {
    const totalAmount=45.98;
    return (
    <Container name="total-amount-container">
      <h3 className='total-amount-title'>Total Amount</h3>
      <h3 className='total-amount-amount'>${totalAmount}</h3>
    </Container>
  )
}


