import React from "react";
import "./Header.css"

function Header() {
    return(
        <header> 
            <div className="header">
                <div className="inner">
                    <h4 className="meal">ReactMeals</h4> 
                </div>
        
            <div className="d-flex">
                <i className="shopping-cart"></i>
                <span className="cart-count"></span>
             </div>
            </div>
        </header>
    )
}

export default Header; 