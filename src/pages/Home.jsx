import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { products } from '../assets/Schema';
import Grids from '../components/Grids';
import homepage from "../assets/images/homepage.jpg";
import proimg from '../assets/images/proimg1.png';
import proimg2 from '../assets/images/proimg2.png';
import more from '../assets/images/more.png';



const Home = () => {

    return (
        <Fragment>
            <Helmet>
                <title>Slasa - Amazing deals, unbeatable prices!</title>
                <meta name="description" content="Shop online at Slasa for a wide range of products at unbeatable prices. Discover great deals, high-quality items, and a seamless shopping experience. Slasa - Your go-to destination for affordable shopping!" />
                <link rel="canonical" href="https://slasa.netlify.app/" />
            </Helmet>
            <div className='page flexcol center'>
                <img className='homeimg' src={homepage} />

                <div className="pageCont">
                    <div className="home_row">
                        <div className="productfake">
                            <img src={proimg2} alt="" />
                        </div>
                        <div className="productfake">
                            <img src={proimg} alt="" />
                        </div>
                        <div className="productfake">
                            <img src={proimg2} alt="" />
                        </div>
                    </div>
                    <div className="home_line">
                        <div className="more">
                            <img src={more} alt="" />
                        </div>
                        <div className="best">
                            <h1 className="heading">BEST OPTIONS</h1>
                            <h1 className="heading">BEST PRICE</h1>
                        </div>
                    </div>
                </div>

                <div className="subPage flexcol center">
                    <Grids nameOne={'CANVAS COLLECTION'} nameTwo={'NEON SIGNS'} productData={products} />
                </div>
            </div>
        </Fragment>
    );
};

export default Home;







