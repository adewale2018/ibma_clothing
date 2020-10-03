import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./Checkout.css";
import {
  selectCartTotal,
  selectCartItems,
} from "../../redux/cart/cart.selector";

function Checkout({ cartItems, total }) {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='checkout-block'>
          <span>Product</span>
        </div>
        <div className='checkout-block'>
          <span>Description</span>
        </div>
        <div className='checkout-block'>
          <span>Quantity</span>
        </div>
        <div className='checkout-block'>
          <span>Price</span>
        </div>
        <div className='checkout-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <h2>{cartItem.name}</h2>
      ))}
      <div className='total'>
        <span>Total: ${total}</span>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
