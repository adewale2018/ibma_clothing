import React from "react";

import "./CollectionPreview.css";
import ItemCollection from "../item-collection/ItemCollection";

function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <ItemCollection key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
