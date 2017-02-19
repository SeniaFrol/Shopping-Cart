
import React from 'react';

const Payment = () => {
  return(
    <div className="row icons_list">
    <div className="medium-5 column">
      <ul className="payment_icons">
        <li><p>Payment Methods:</p></li><li><a><img src='../../style/icons/MasterCard.svg'/></a><a><img src='../../style/icons/visa.svg'/></a><a><img src='../../style/icons/ae.svg'/></a>
        <a><img src='../../style/icons/discover.svg'/></a><a><img src='../../style/icons/pp.svg'/></a><a><img src='../../style/icons/qiwi.svg'/></a>
        </li>
      </ul>
    </div>
    <div className="medium-1 column">
      <ul>
        <li><p>Security:</p></li><li><a className="shld"><img className="shield_icon" src='../../style/icons/shield.svg'/></a></li>
      </ul>
    </div>
    <div className="medium-5 column">
      <ul className="social_media_icons">
        <li><p>Social Media:</p></li>
        <li><a><img src='../../style/icons/facebook.svg'/></a><a><img src='../../style/icons/google.svg'/></a><a><img src='../../style/icons/youtube.svg'/></a><a><img src='../../style/icons/twitter.svg'/></a>
        <a><img src='../../style/icons/v.svg'/></a><a><img src='../../style/icons/p.svg'/></a><a><img src='../../style/icons/rss.svg'/></a><a><img src='../../style/icons/linkedIn.svg'/></a>
        <a><img src='../../style/icons/instagram.svg'/></a><a><img src='../../style/icons/dots.svg'/></a><a><img src='../../style/icons/cloud.svg'/></a><a><img src='../../style/icons/box.svg'/></a>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Payment;
