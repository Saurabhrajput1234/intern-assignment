import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import { useState } from 'react';
import SearchProduct from './SearchProduct';
import { MdAddShoppingCart } from "react-icons/md";


const Header = (props) => {

  console.log("thiese are saurabh", props.cartItem);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div ><Link to="/" className="navbar-logo">
          Assignment
        </Link></div>
        <div className={`navbar-links ${isNavbarOpen ? 'active' : ''}`}>

          <SearchProduct onShow={props.onShow} show={props.show} onClose={props.onClose} />
          <a href="/">Home</a>
          <a href="/Products">Product</a>
          <a href="/signup">Signup</a>
          {/* <a  onClick={props.onShow1} >
<Modal cartItem={props.cartItem}   show1 = {props.show1} onClose1={props.onClose1}  handleAddProduct={props.handleAddProduct} handleRemoveProduct={props.handleRemoveProduct} handleCartClear={props.handleCartClear}> add</Modal>
                <span className='cart-length'>{props.cartItem.length === 0 ? "": props.cartItem.length}</span>
 </a> */}


          <div style={{ color: "white" }} className='/cart' onClick={props.onShow1} ><MdAddShoppingCart />
            <span className='cart-length'>{props.cartItem.length === 0 ? "" : props.cartItem.length}</span>

          </div>


        </div>


        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Header
