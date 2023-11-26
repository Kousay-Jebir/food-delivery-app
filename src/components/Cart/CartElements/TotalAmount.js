import React from 'react'
import Container from '../../container/Container';
import './TotalAmount.css';
import { useContext } from 'react';
import orderContext from '../../../order-context';

export default function TotalAmount() {
  const itemOrder = useContext(orderContext);
  const totalAmount = itemOrder && itemOrder.order ? itemOrder.order.totalPrice : 0;
  return (
    <Container name="total-amount-container">
      <div className='total-amount-title'>Total Amount</div>
      <div className='total-amount-amount'>{totalAmount.toFixed(2)}</div>
    </Container>
  )
}


