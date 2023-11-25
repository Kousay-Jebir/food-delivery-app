import React from 'react'
import './CartItemInfo.css';
//import Container from '../container/Container';


export default function CartItemInfo() {
    const itemName="Sushi";
    const itemPrice=11.45;
    const itemQuantityInCart=2; 
    return (
    <div className="cart-item-info-container">
        <div className="item-name">{itemName}</div>
        <div className='item-price' >${itemPrice * itemQuantityInCart}</div>
        <div className='item-quantity'>x {itemQuantityInCart}</div> 
    </div>
  )
}
