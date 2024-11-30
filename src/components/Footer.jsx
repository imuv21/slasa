import React from 'react';
import logo from '../assets/images/logo.png';
import visa from '../assets/images/visa.png';
import upi from '../assets/images/upi.png';
import paypal from '../assets/images/paypal.png';
import mastercard from '../assets/images/mastercard.png';


const Footer = () => {




  return (
    <div className='footer'>

      <div className="subFooter">
        <img src={logo} alt="logo" />
        <div className="navCont">
          <div className='footerNav'>
            <p className="text">About us</p>
            <p className="text">Contact us</p>
            <p className="text">Privacy Policy</p>
            <p className="text">Terms of Service</p>
            <p className="text">Returns & refunds</p>
            <p className="text">Support</p>
            <p className="text">FAQ</p>
          </div>
          <div className='footerSupport'>
            <p className="text">Need Help?</p>
            <p className="text">Visit Our Support Page</p>
          </div>
        </div>
      </div>

      <div className="hiddeNav">
        <p className="text">About us</p>
        <p className="text">Contact us</p>
        <p className="text">Privacy Policy</p>
        <p className="text">Terms of Service</p>
        <p className="text">Returns & refunds</p>
        <p className="text">Support</p>
        <p className="text">FAQ</p>
      </div>

      <div className="footerline"></div>

      <div className="subFooterTwo">
        <p className='text'>Best Price Arts. © 2022 All Rights Reserved.</p>
        <div className='footerLogos'>
          <img src={visa} alt="visa" />
          <img src={upi} alt="upi" />
          <img src={mastercard} alt="mastercard" />
          <img src={paypal} alt="paypal" />
        </div>
      </div>

    </div>
  )
}

export default Footer