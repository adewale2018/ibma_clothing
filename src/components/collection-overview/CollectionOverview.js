import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./CollectionOverview.css";
import CollectionPreview from "../preview/CollectionPreview";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";

function CollectionOverview({ collections }) {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
