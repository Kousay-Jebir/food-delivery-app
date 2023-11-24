import React from 'react'
import './CartItemInfo.css';
import Container from '../container/Container';


export default function CartItemInfo() {
    const itemName="Sushi";
    const itemPrice=22.9;
    const itemQuantityInCart=2; 
    return (
    <Container name="cart-item-container">
        <h4 className="item-name">{itemName}</h4>
        <p className='item-price' >${itemPrice}</p>
        <p className='item-quantity'>x {itemQuantityInCart}</p> 
        <hr></hr>
    </Container>
  )
}
