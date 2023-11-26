import React from 'react'
import './CartItemInfo.css';
//import Container from '../container/Container';


export default function CartItemInfo(props) {
  const itemName = props.foodName;
  const itemPrice = props.foodPrice;
  const itemQuantityInCart = props.foodQuantity;
  return (
    <div className="cart-item-info-container">
      <div className="item-name">{itemName}</div>
      <div className='item-price' >{itemPrice}</div>
      <div className='item-quantity'>x {itemQuantityInCart}</div>
    </div>
  )
}
