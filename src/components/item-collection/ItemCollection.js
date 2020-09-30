import React from "react";

import "./ItemCollection.css";
import CustomButton from "../custom-button/CustomButton";

function ItemCollection({ id, name, imageUrl, price }) {
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
      <CustomButton inverted>Add To Cart</CustomButton>
    </div>
  );
}

export default ItemCollection;
