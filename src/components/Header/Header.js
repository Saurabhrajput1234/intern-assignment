import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import addToCart from "../image/addToCart.png";

const Header = (props) => {
  return (
    <div className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            mandeshi
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Product</Link>
          </li>
        </ul>

        <ul>
          <li>
            <div className="cart" onClick={props.onShow}>
              {" "}
              <img className="add-to-cart" src={addToCart} alt="" />
              <span className="cart-length">
                {props.cartItem.length === 0 ? "" : props.cartItem.length}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
