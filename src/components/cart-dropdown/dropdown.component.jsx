import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./dropdown.styles.scss";

const Cart = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

export default Cart;
