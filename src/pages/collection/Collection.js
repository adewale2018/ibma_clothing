import React from "react";
import { connect } from "react-redux";

import "./Collection.css";
import { selectCollection } from "../../redux/shop/shop.selectors";

function Collection({ collection }) {
  console.log("COLLC>>>", collection);
  return (
    <div className='collection-page'>
      <h2>{`COLLECTION `}</h2>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
