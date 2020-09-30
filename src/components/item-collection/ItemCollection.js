import React from "react";
import { connect } from "react-redux";

import "./ItemCollection.css";
import CustomButton from "../custom-button/CustomButton";
import { addItem } from "../../redux/cart/cart-actions";

function ItemCollection({ item, addItem }) {
  const {  name, imageUrl, price } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add To Cart
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ItemCollection);
