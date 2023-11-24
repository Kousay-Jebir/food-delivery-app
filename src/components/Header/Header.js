import React from "react";
import "./Header.css"
import CartButton from "../CartButton/CartButton";

function Header() {
    return(
        <header> 
            <div className="header">
                <div className="inner">
                    <h4 className="meal">ReactMeals</h4> 
                </div>
        
            <div className="d-flex">
                <CartButton/>
             </div>
            </div>
        </header>
    )
}

export default Header; 