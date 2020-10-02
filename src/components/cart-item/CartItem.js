import React from "react";

import "./CartItem.css";

function CartItem({ item: { name, price, imageUrl, quantity } }) {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <div className='name'>{name}</div>
        <div className='price'>
          {quantity} x ${price}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
