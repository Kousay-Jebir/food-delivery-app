import React, {useState} from 'react'
import Container from '../../container/Container'
import CartItemInfo from './CartItemInfo'
import CartItemButtons from './CartItemButtons'
import './CartItem.css'

export default function CartItem({item, onItemUpdate}) {
    const [quantity, setQuantity] = useState(item.itemQuantity);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
        const updatedItem = { ...item, itemQuantity: newQuantity };
        onItemUpdate(updatedItem);
    }

    return (
    <Container name='cart-item'>
        <CartItemInfo item={item} quantity={quantity}/>
        <CartItemButtons initialQuantity={quantity} onQuantityChange={handleQuantityChange} />
        
    </Container>
    )
}
