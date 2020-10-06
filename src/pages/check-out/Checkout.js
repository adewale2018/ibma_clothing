import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./Checkout.css";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import {
  selectCartTotal,
  selectCartItems,
} from "../../redux/cart/cart.selector";
import { } from '../../redux/shop/shop.selectors'
import StripeCheckoutButton from '../../components/stripe/StripeCheckoutButton';

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
          <span>Price($)</span>
        </div>
        <div className='checkout-block'>
          <span>Quantity</span>
        </div>
        <div className='checkout-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
        <span>Total: ${total}</span>
      </div>
      <div className="test-warning">
        ** Please you the following for the following test credit card for payment **
        <br />
        Card No: 4242 4242 4242 Exp: 01/20 Cvv: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
