import React from "react";

import ShopDetails from "./ShopDetails";

const Shop = () => {
  return (
    <React.Fragment>
      <div className="py-10 bg-Secondary-light">
        <div className="text-center container">
          <div className="mb-5">
            <p className="font-medium">Shop The Look</p>
          </div>
          <div>
                <ShopDetails />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Shop;
