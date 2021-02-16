import React from "react";
import './navbar.styles.scss';
class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="logo">RADSTYLES</div>
                    <ul className="navItems">
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Sign In</a></li>
                        <li><a href="#">Cart</a></li>
                    </ul>
            </div>
        )
    }
}

export default Navbar;