import React from "react";
import Products from "../Products/Products";

import { Route, Routes } from "react-router-dom";
import Modal from "../modal/Modal";

const Routers = (props) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Products
              productItems={props.productItems}
              handleAddProduct={props.handleAddProduct}
            />
          }
        />

        <Route
          path="/modal"
          element={
            <Modal
              cartItem={props.cartItem}
              handleAddProduct={props.handleAddProduct}
              handleRemoveProduct={props.handleRemoveProduct}
              handleCartClear={props.handleCartClear}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Routers;
