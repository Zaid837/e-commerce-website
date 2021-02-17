import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.scss";
class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="logo">
          <Link to="/" className="logo-container">
            RADSTYLES
          </Link>
        </div>

        <ul className="navItems">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
