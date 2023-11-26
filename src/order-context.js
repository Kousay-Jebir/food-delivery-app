import React from "react";

const orderContext = React.createContext({
    sushiAmount: 0,
    schnitzelAmount: 0,
    barbercueBurgerAmount: 0,
    GreenBowlAmount: 0,
    totalPrice: 0,
    numberOfItems: 0
});
export default orderContext;