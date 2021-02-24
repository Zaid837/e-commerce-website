import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import Cart from "../cart-dropdown/dropdown.component";
import "./navbar.styles.scss";
import CartIcon from "../cart-icon/cartIcon.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
const Navbar = ({ currentUser, hidden }) => {
  return (
    <div className="Navbar">
      <div className="logo">
        <Link to="/" className="logo-container">
          RADSTYLES
        </Link>
      </div>

      <div className="navItems">
        <Link className="options" to="/shop">
          Shop
        </Link>
        <Link className="options" to="/">
          Contact
        </Link>
        {/* <Link className="options" to="/signIn">
          Sign In
        </Link> */}
        {currentUser ? (
          <Link to="/" className="options" onClick={() => auth.signOut()}>
            Sign Out
          </Link>
        ) : (
          <Link className="options" to="/signIn">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <Cart />}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Navbar);
