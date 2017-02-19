import React from 'react';

const Footer = () => {
  return(
    <footer>
      <div className="row footer_links">
        <div className="column medium-1">
          <span className="footer_title">About the store</span>
          <ul>
            <li><a>Who we are</a></li><li><a>Contacts</a></li><li><a>Privacy policy</a></li><li><a>Terms of use</a></li>
          </ul>
        </div>
        <div className="column medium-1">
          <span className="footer_title">Order support</span>
          <ul>
            <li><a>Oreder status</a></li><li><a>Shipping</a></li><li><a>Return</a></li>
          </ul>
        </div>
        <div className="column medium-1">
          <span className="footer_title">Phones</span>
          <ul>
            <li><a>Pay as you go</a></li><li><a>Plans</a></li><li><a>Contacts</a></li><li><a>Business</a></li>
          </ul>
        </div>
        <div className="column medium-1">
          <span className="footer_title">Boardband</span>
          <ul>
            <li><a>Plans</a></li><li><a>Home</a></li><li><a>Business</a></li>
          </ul>
        </div>
        <div className="column medium-1">
          <span className="footer_title">Accesories</span>
          <ul>
            <li><a>Memorias</a></li><li><a>Car charger</a></li>
          </ul>
        </div>
        <div className="column medium-1">
          <span className="footer_title">My store</span>
          <ul>
            <li><a>Register</a></li><li><a>Forgotten Pin</a></li>
          </ul>
        </div>
        <div className="column medium-1">
          <span className="footer_title">Community</span>
          <ul>
            <li><a>Blog</a></li><li><a>Facebook</a></li><li><a>Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
