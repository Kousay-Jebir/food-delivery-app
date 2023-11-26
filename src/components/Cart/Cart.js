import React from 'react';
import Container from '../container/Container';
import CartItem from './CartItem/CartItem';
import TotalAmount from './CartElements/TotalAmount';
import CartButtons from './CartElements/CartButtons';
import './Cart.css'
import CartItemButtons from './CartItem/CartItemButtons';
import CartItemInfo from './CartItem/CartItemInfo';

export default function Cart(props) {

  return (
    <Container name={props.state ? 'cart-modal-block' : 'cart-modal-none'}>
      {props.items.map((item) => {
        return (
          <Container name='cart-item'>
            <CartItemInfo key={item.key} foodName={item.foodName} foodQuantity={item.foodQuantity} foodPrice={item.foodPrice} />
            <CartItemButtons foodQuantity={item.foodQuantity} />
            <hr></hr>
          </Container>)
      })}
      <TotalAmount />
      <CartButtons setModal={props.setModal} />
    </Container>
  )
}