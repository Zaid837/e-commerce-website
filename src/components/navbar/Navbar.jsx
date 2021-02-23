import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import "./navbar.styles.scss";
const Navbar = ({ currentUser }) => {
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
        <Link className="options" to="/">
          Cart
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Navbar);
