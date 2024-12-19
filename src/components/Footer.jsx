import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/sett-logo.png';
import visa from '../assets/images/visa.png';
import upi from '../assets/images/upi.png';
import paypal from '../assets/images/paypal.png';
import mastercard from '../assets/images/mastercard.png';
import returnimg from '../assets/images/returns.png';
import payment from '../assets/images/secure-payment.png';
import shipping from '../assets/images/freeshipping.png';
import human from '../assets/images/customer-care.png';


const Footer = () => {

  return (
    <div className='footer'>

      <section className="headFooter">

        <div className="headItem">
          <img src={returnimg} alt="return" />
          <article className="headDetails">
            <h1 className='text fw-600'>Hassle Free Returns</h1>
            <p className='text'>Easy and flexible 7 days return policy</p>
          </article>
        </div>
        <div className="headItem">
          <img src={payment} alt="payment" />
          <article className="headDetails">
            <h1 className='text fw-600'>Secure Payment</h1>
            <p className='text'>Shop confidently with secure methods</p>
          </article>
        </div>
        <div className="headItem">
          <img src={shipping} alt="shipping" />
          <article className="headDetails">
            <h1 className='text fw-600'>Free Shipping</h1>
            <p className='text'>On orders above 200 INR*</p>
          </article>
        </div>
        <div className="headItem">
          <img src={human} alt="callback" />
          <article className="headDetails">
            <h1 className='text fw-600'>Talk to Human</h1>
            <p className='text'>Request a call back</p>
          </article>
        </div>

      </section>

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