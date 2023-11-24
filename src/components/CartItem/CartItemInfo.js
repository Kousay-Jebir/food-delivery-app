import React from 'react'

export default function CartItemInfo() {
    const ItemName="Sushi";
    const ItemPrice=22.9;
    const ItemQuantityInCart=2; //kadeh mn item fl cart
    return (
    <>
      <h3>{ItemName}</h3>
      <p>${ItemPrice}</p>
      <p>x{ItemQuantityInCart}</p> 
    </>
  )
}
