import React, { Fragment} from 'react';
import { Helmet } from 'react-helmet-async';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactUs = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Contact us | Slasa - Amazing deals, unbeatable prices!</title>
                <meta name="description" content="Shop online at Slasa for a wide range of products at unbeatable prices. Discover great deals, high-quality items, and a seamless shopping experience. Slasa - Your go-to destination for affordable shopping!" />
                <link rel="canonical" href="https://slasa.netlify.app/login" />
            </Helmet>
            <div className='pageTwo'>
                <div className='form-wrapper'>

                    <form action="">
                        <h1 className='heading'>Contact Us</h1>
                        <div className='contact-flex'>
                            <input type="text" name="" placeholder='Name' id="" required />

                            <input type="text" name="" id="" placeholder='Phone no' required />
                        </div>

                        <div>
                            <input type="text" placeholder='Email' required/>
                        </div>

                        <div>
                            <textarea name="" id="" placeholder='Message here' required></textarea>
                        </div>

                        <button>Submit</button>
                    </form>


                    <div className='contact-info'>
                        <h2 className='headingSmol'>Get in touch</h2>
                        <h3 className='heading'>Don't Be a Stranger, Just Say Hello.</h3>

                        <div className=''>
                            <div className='contact-info-card'>
                                <div>
                                    <LocationOnIcon />
                                </div>

                                <div>
                                    <h4 className='text fw-600'>Address</h4>
                                    <p className='textBig'>Street 68 - 1 - Jebel Ali Industrial Area - Dubai - United Arab Emirates</p>
                                </div>
                            </div>

                            <div className='contact-info-card'>
                                <div>
                                    <EmailIcon />
                                </div>

                                <div>
                                    <h4 className='text fw-600'>Email</h4>
                                    <p className='textBig'>contact@bestpricearts.com</p>
                                </div>
                            </div>

                            <div>
                                <h4 className='text fw-600'>Business Hours</h4>
                                <p className='textBig'>
                                    <ul className='flexcol g10 mt-10' >
                                        <li className='textBig flex center-start g10'><AccessTimeIcon /> Monday - Saturday 8:30am to 6pm
                                        </li>
                                        <li className='textBig flex center-start g10 mt'> <AccessTimeIcon /> Sunday - Closed
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                    </div>


                </div>



            </div>
        </Fragment>
    )
}

export default ContactUs