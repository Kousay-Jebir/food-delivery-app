import React from 'react'
import './CartItemInfo.css';
//import Container from '../container/Container';


export default function CartItemInfo({ item, quantity }) {
    const itemName=item.itemName;
    const itemPrice=item.itemPrice;
    const itemQuantity = quantity;
    const formattedPrice = (itemPrice * itemQuantity).toFixed(2);
    return (
    <div className="cart-item-info-container">
        <div className="item-name">{itemName}</div>
        <div className='item-price' >${formattedPrice}</div>
        <div className='item-quantity'>x {itemQuantity}</div>
    </div>
  )
}
