import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

const Shop = ({ collections }) => {
  return (
    <div className="shop-page" style={{ padding: "20px 80px" }}>
      <CollectionOverview />
    </div>
  );
};

export default Shop;
