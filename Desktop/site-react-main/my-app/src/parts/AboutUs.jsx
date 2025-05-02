import React from 'react';
import Fruits from '../pics/fruits.png'
import Icon1 from '../pics/cup.png'
import Icon2 from '../pics/mail.png'
import Arrow from '../pics/arrow.png'

const AboutUs = () => {
  return (
    <div className="about_us">
      <img src={Fruits} />
      <div className="content_about_us">
        <label>About Us</label>
        <h1>We Believe in Working<br />Accredited Farmers</h1>
        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to<br />been the industry's standard dummy text ever since the 1500s, when an unknown<br />printer took a galley.</p>
        <div className="icons_about">
          <div className="row_1">
            <img src={Icon1} />
            <span>
              <h5>Organic Foods Only</h5>
              <p>Simply dummy text of the printing and typesetting<br /> industry. Lorem Ipsum </p>
            </span>
          </div>
          <div className="row_2">
            <img src={Icon2}/>
            <span>
              <h5>Quality Standards</h5>
              <p> Simply dummy text of the printing and typesetting<br /> industry. Lorem Ipsum</p>
            </span>
          </div>
        </div>
        <button> <p>Shop Now</p> <img src={Arrow} /> </button>
      </div>
    </div>
  );
};

export default AboutUs;
