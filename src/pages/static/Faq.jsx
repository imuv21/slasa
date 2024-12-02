import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {

  const [currentFaq, setCurrentFaq] = useState(null)

  const faq = [
    {
      q: 'Can you customize a product?',
      a: ' Yes, we do offer customization service. you need to contact us before you make the purchase at +971 4 330 0050'
    },
    {
      q: 'Can I Pay by Cash?',
      a: 'Best Price Arts has the option of “Cash on Delivery” and you will have to provide your accurate phone number and address so we can confirm your order before shipping.'
    },
    {
      q: 'Do you deliver to Abu Dhabi and other Emirates?',
      a: 'Yes we deliver to all the cities of UAE.'
    },
    {
      q: 'Can I cancel my order after purchasing?',
      a: ' Please ready our returns and cancelation policy for more information.'
    },
    {
      q: 'How many days it takes for delivery?',
      a: 'It depends on the product availability, usually you can expect between 3 to 7 working days.'
    }
  ]

  const setcheck = (e) => {
    if (e === currentFaq) {
      setCurrentFaq(null)
    } else {
      setCurrentFaq(e)
    }
  }

  return (
    <Fragment>
      <Helmet>
        <title>FAQ | Slasa - Amazing deals, unbeatable prices!</title>
        <meta name="description" content="Shop online at Slasa for a wide range of products at unbeatable prices. Discover great deals, high-quality items, and a seamless shopping experience. Slasa - Your go-to destination for affordable shopping!" />
        <link rel="canonical" href="https://slasa.netlify.app/login" />
      </Helmet>
      <div className='pageTwo'>
        <h1 className='heading center flex'>FAQ</h1>
        {
          faq?.map((e, i) => {
            return (
              <div key={i} className={`faq-con  ${currentFaq == i && 'active'}`}>
                <div className='faq-header' onClick={() => setcheck(i)}>
                  {e.q}
                  <ExpandMoreIcon />
                </div>
                <div className="faq-content">
                  <p >
                    {e.a}
                  </p>
                </div>
              </div>
            )
          })
        }

      </div>
    </Fragment>
  )
}

export default Faq