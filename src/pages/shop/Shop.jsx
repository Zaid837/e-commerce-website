import React from "react";

import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page" style={{ padding: "20px 80px" }}>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
