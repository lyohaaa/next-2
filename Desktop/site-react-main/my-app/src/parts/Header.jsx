import React from 'react';
import Logo from '../pics/Logo.png'
import Vector from '../pics/Vector.svg'
import Cart from '../pics/cart.svg'
import Icon from '../pics/Icon.svg'


const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="nav_links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li>
            <a href="#">Pages</a>
            <img style={{ marginLeft: '4px' }} src={Icon} alt="icon" />
          </li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">News</a></li>
        </ul>
        <div className="cart_search">
          <div className="search_bar">
            <input type="text" className="search_input" />
            <button className="search_icon">
              <img src={Vector} alt="search" />
            </button>
          </div>
          <div className="cart_bar">
            <button className="cart_icon">
              <img src={Cart} alt="cart" />
            </button>
            <p>Cart(0)</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
