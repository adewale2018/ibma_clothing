import React from "react";

import "./CartDropdown.css";
import CustomButton from "../custom-button/CustomButton";

function CartDropdown() {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;
