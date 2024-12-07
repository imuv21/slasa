import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';


const ContactUs = () => {

    const [contactUs, setContactUs] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContactUs((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleContact = (e) => {
        e.preventDefault()
        console.log('Contact us form is submitted', contactUs)
        setContactUs({
            name: '',
            email: '',
            message: ''
        })
    }

    return (
        <section className='pageTwo flexcol center'>
            <h1 className='heading'>Contact Us</h1>
            <div className='contact-us-wrapper'>
                <div className='contact-us-input-con'>
                    <div className='headingSmol'>Get in Touch with Us!</div>
                    <div className=' text '>We can assist with orders, product queries, or anything else you need.</div>
                    <form onSubmit={handleContact} className='flexcol start-center g15 wh'>
                        <input type='text' placeholder='Name' name='name' value={contactUs.name} onChange={handleContactChange} />
                        <input type='email' placeholder='Email' name='email' value={contactUs.email} onChange={handleContactChange} />
                        <textarea className='message-box-text' name='message' value={contactUs.message} placeholder='Message here' onChange={handleContactChange} />
                        <button type='submit' className=''>Submit</button>
                    </form>
                </div>
                <div className='flexcol start g15'>
                    <div className='flexcol start-center g5'>
                        <h3 className='contactustext'>Address</h3>
                        <p className='textBig '>Corporate add-A-1/197,HASTSAL ROAD ,UTTAM NAGAR
                            DELHI -110059</p>
                        <p className='textBig '>Company Name:  <span className='textBig fw-600'>HERBAL SCIENCE</span>  </p>
                    </div>
                    <div className='flexcol start-center g5'>
                        <h3 className='contactustext'>Contact</h3>
                        <p className='textBig  flex flex center-start g10'><LocalPhoneIcon />: 9599896554</p>
                        <p className='textBig  flex center-start g10'><EmailIcon /> : herbalscience28@gmail.com</p>
                    </div>
                    <div className='flexcol start-center g10'>
                        <h3 className='contactustext'>Follow on Social Media</h3>
                        <div className='icon-con-wrapper'>
                            <div className='icon-con facebook'>
                                <FacebookIcon />
                            </div>
                            <div className='icon-con instagram'>
                                <InstagramIcon />
                            </div>
                            <div className='icon-con x'>
                                <XIcon />
                            </div>
                            <div className='icon-con youtube'>
                                <YouTubeIcon />
                            </div>
                        </div>
                    </div>
                    <div className='flexcol start-center g5'>
                        <h3 className='contactustext'>Call or Email Us</h3>
                        <p className='textBig'> You can contact us anytime between <span className='textBig fw-500'> 9AM to 6PM </span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs