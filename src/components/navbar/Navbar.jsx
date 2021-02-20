import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import "./navbar.styles.scss";
const Navbar = ({ user }) => {
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
        <Link className="options" href="#">
          Contact
        </Link>
        {/* <Link className="options" to="/signIn">
          Sign In
        </Link> */}
        {user ? (
          <Link className="options" onClick={() => auth.signOut()}>
            Sign Out
          </Link>
        ) : (
          <Link className="options" to="/signIn">
            Sign In
          </Link>
        )}
        <Link className="options" href="#">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
