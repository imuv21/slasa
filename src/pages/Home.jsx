import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import tempImage from '../assets/images/defaultImage.jpg';

const Home = () => {

    return (
        <Fragment>
            <Helmet>
                <title>Slasa - Amazing deals, unbeatable prices!</title>
                <meta name="description" content="Shop online at Slasa for a wide range of products at unbeatable prices. Discover great deals, high-quality items, and a seamless shopping experience. Slasa - Your go-to destination for affordable shopping!" />
                <link rel="canonical" href="https://slasa.netlify.app" />
            </Helmet>
            <section className='page flexcol center' style={{height: '200vh'}}>
             {/* 
                <article><h1 className='headingBig' style={{ color: 'var(--codeSix)' }}>Best Deals</h1></article>

                <article><h1 className='headingBig' style={{ color: 'var(--codeSix)' }}>Shop By Category</h1></article>
                <section className="category">
                    <article className='cate-item'>
                        <img src={tempImage} alt="JOINT PAIN" />
                        <h1 className='heading'>JOINT PAIN</h1>
                    </article>
                    <article className='cate-item'>
                        <img src={tempImage} alt="HAIR FALL" />
                        <h1 className='heading'>HAIR FALL</h1>
                    </article>
                    <article className='cate-item'>
                        <img src={tempImage} alt="WEIGHT GAIN" />
                        <h1 className='heading'>WEIGHT GAIN</h1>
                    </article>
                    <article className='cate-item'>
                        <img src={tempImage} alt="DIABETIC" />
                        <h1 className='heading'>DIABETIC</h1>
                    </article>
                    <article className='cate-item'>
                        <img src={tempImage} alt="SEXUAL" />
                        <h1 className='heading'>SEXUAL</h1>
                    </article>
                </section>

                <article><h1 className='headingBig' style={{ color: 'var(--codeSix)' }}>Daily Wellness</h1></article> */}

            </section>
        </Fragment>
    );
};

export default Home;