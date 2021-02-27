import React from "react";
import "./herobox.styles.scss";
import { Link } from "react-router-dom";
import model from "../../../assets/images/model.jpg";

function HeroBox() {
  return (
    <div className="heroBox">
      <div>
        <h1 className="heading">
          Welcome to <br />
          <span>RADSTYLES CLUB</span>
        </h1>
        <p className="subtext">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ducimus
          cupiditate odit architecto laudantium exercitationem necessitatibus
          veritatis, aut fuga saepe!
        </p>
        <button className="shop-button">
          <Link to="/shop" className="shop">
            Shop Here
          </Link>
        </button>
      </div>
      <img src={model} alt="" className="model" />
    </div>
  );
}

export default HeroBox;
