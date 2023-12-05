import React from "react";
import "./Header.css"
import CartButton from "../CartButton/CartButton";

function Header({setModal, count}) {
    return (
        <header>
         <h1 className="meal">ReactMeals</h1>
     
      <CartButton setModal={setModal} count={count} />
    </header>
     
      
    )
}

export default Header; 



