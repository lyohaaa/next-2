import React from 'react';
import Logo from '../pics/Logo.png';
import Inst from '../pics/instagram.png';
import Fb from '../pics/facebook.png';
import Tw from '../pics/twitter.png';
import Pinterest from '../pics/pinterest.png';


const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:needhelp@Organia.com">needhelp@Organia.com</a></p>
          <p>Phone: 666 888 888</p>
          <p>Address: 88 road, borklyn street, USA</p>
        </div>

        <div className="footer-section logo-info">
          <img src={Logo} alt="Organick Logo" className="logo" />
          <p>Simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum simply dummy text of the printing</p>
          <div className="social-media">
            <a href="#"><img src={Inst} alt="Instagram" /></a>
            <a href="#"><img src={Fb} alt="Facebook" /></a>
            <a href="#"><img src={Tw} alt="Twitter" /></a>
            <a href="#"><img src={Pinterest} alt="Pinterest" /></a>
          </div>
        </div>

        <div className="footer-section utility-pages">
          <h3>Utility Pages</h3>
          <ul>
            <li><a href="#">Style Guide</a></li>
            <li><a href="#">404 Not Found</a></li>
            <li><a href="#">Password Protected</a></li>
            <li><a href="#">Licences</a></li>
            <li><a href="#">Changelog</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Copyright Organick</p>
      </div>
    </footer>
  );
};

export default Footer;
