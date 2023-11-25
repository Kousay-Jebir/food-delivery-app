import React from "react";
import "./Header.css"
import CartButton from "../CartButton/CartButton";

function Header() {
    return (
        <header>

            <h1 className="meal">ReactMeals</h1>



            <CartButton />
        </header>
    )
}

export default Header; 