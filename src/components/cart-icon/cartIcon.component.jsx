import React from "react";
import { connect } from "react-redux";
import { toggleClassHidden } from "../../redux/cart/cart-actions";
import { ReactComponent as ShoppingIcon } from "../../assets/images/cart.svg";
import "./cardIcon.component.styles.scss";

const CartIcon = ({ toggleClassHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleClassHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleClassHidden: () => dispatch(toggleClassHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
