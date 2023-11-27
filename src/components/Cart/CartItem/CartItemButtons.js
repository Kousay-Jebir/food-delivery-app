import React, { useState } from 'react'
import './CartItemButtons.css'

export default function CartItemButtons({ initialQuantity, onQuantityChange }) {
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
        onQuantityChange(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0){
            setQuantity(quantity - 1);
            onQuantityChange(quantity - 1);
        }
    }

    return (
    <div className="item-buttons-container">
      <button className="button-plus" onClick={handleIncrement}> + </button>
      <button className="button-minus" onClick={handleDecrement}> - </button>
    </div>
    )
}
