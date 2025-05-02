import React from 'react';
import Arrow from '../pics/arrow.png';
const Header2 = () => {
  return (
    <div className="header2">
      <div className="content_health">
        <p>100% Natural Food</p>
        <h1>Choose the best<br />healthier way<br />of life
        </h1>
        <button>
          <p>Explore Now</p>
          <img src={Arrow} />
        </button>
      </div>
    </div>
  );
};

export default Header2;
