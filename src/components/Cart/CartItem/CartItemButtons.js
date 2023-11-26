import React from 'react'
import './CartItemButtons.css'

export default function CartItemButtons(props) {


  return (
    <div className="item-buttons-container">
      <button className="button-plus"> + </button>
      <button className="button-minus"> - </button>
    </div>
  )
}
