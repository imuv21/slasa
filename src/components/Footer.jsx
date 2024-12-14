import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/sett-logo.png';
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
            <Link to='/about-us' className="text">About us</Link>
            <Link to='/contact-us' className="text">Contact us</Link>
            <Link to='/privacy-policy' className="text">Privacy Policy</Link>
            <Link to='/terms-and-conditions' className="text">Terms And Conditions</Link>
            <Link to='/return-policy' className="text">Returns & refunds</Link>
            <Link to='/shipping-policy' className="text">Shipping Policy</Link>
          </div>
          <div className='footerSupport'>
            <p className="text">Need Help?</p>
            <p className="text">Visit Our Support Page</p>
          </div>
        </div>
      </div>

      <div className="hiddeNav">
        <Link to='/about-us' className="text">About us</Link>
        <Link to='/contact-us' className="text">Contact us</Link>
        <Link to='/privacy-policy' className="text">Privacy Policy</Link>
        <Link to='/terms-and-conditions' className="text">Terms And Conditions</Link>
        <Link to='/return-policy' className="text">Returns & refunds</Link>
        <Link to='/shipping-policy' className="text">Shipping Policy</Link>
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