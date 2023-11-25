import React from "react";
import "./Header.css"
import CartButton from "../CartButton/CartButton";

function Header({setModal}) {
    return (
        <header>

            <h1 className="meal">ReactMeals</h1>



            <CartButton setModal={setModal} />
        </header>
    )
}

export default Header; 