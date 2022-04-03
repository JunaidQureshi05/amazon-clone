import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img
          src="https://www.pikpng.com/pngl/m/327-3272114_amazon-de-marketplace-amazon-logo-on-black-clipart.png"
          alt=""
        />
      </div>
      <div className="address">
        <div className="greet">Hello</div>
        <div className="location">
          <i class="fa-solid fa-location-dot"></i>Select your address
        </div>
      </div>
      <div className="search-container">
        <input type="text" name="" id="" />
        <button>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="sign-in-container">
        <div className="greet">Hello,Sign In</div>
        <div className="sign-in">Account & Lists</div>
      </div>
      <div className="orders-container">
        <div className="greet">Returns &</div>
        <div>Orders</div>
      </div>
      <div className="cart">
        <i class="fa-solid fa-cart-shopping"></i> Cart
      </div>
    </div>
  );
};

export default Header;
