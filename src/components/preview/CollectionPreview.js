import React from "react";

import "./CollectionPreview.css";

function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <h4 key={item.id}>{item.name}</h4>
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
