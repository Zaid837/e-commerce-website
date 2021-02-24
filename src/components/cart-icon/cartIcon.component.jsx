import React from "react";
import { connect } from "react-redux";
import { toggleClassHidden } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/images/cart.svg";
import "./cardIcon.component.styles.scss";

const CartIcon = ({ toggleClassHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleClassHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleClassHidden: () => dispatch(toggleClassHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
