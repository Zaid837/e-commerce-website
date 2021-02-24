import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import Cart from "../cart-dropdown/dropdown.component";
import "./navbar.styles.scss";
import CartIcon from "../cart-icon/cartIcon.component";
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
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
export default connect(mapStateToProps)(Navbar);
