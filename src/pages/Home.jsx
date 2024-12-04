import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { products } from '../assets/Schema';
import ProductCard from '../components/ProductCard';
import Grids from '../components/Grids';
import proimg from '../assets/images/proimg1.png';
import proimg2 from '../assets/images/proimg2.png';
import more from '../assets/images/more.png';
import returnimg from '../assets/images/return-box.png';
import credit from '../assets/images/credit-card.png';
import product from '../assets/images/shopping-cart.png';
import shipping from '../assets/images/free-delivery.png';
import people from '../assets/images/people.png';



const Home = () => {

    const homepage = 'https://images.unsplash.com/photo-1599104040457-fe0e8c9ae77e';

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
                    <Grids nameOne={'Best Deals'} nameTwo={'Best Sellers'} productData={products} />
                </div>

                <section className="featureProducts">
                    <h1 className='heading'>Featured Products</h1>

                    <div className="fpGrid">
                        {products && products.length > 0 && products.map((item) => (
                            <Fragment key={item.productId}>
                                <ProductCard id={item.productId} name={item.name} category={item.category} image={item.image} salePrice={item.salePrice} />
                            </Fragment>
                        ))}
                    </div>
                </section>

                <section className="features">
                    <article>
                        <img src={returnimg} alt="return" />
                        <div className="fdetails">
                            <h1 className="text">Hassle Free Returns</h1>
                            <h2 className="textSmol">Easy and flexible 7 days return policy</h2>
                        </div>
                    </article>
                    <article>
                        <img src={credit} alt="credit" />
                        <div className="fdetails">
                            <h1 className="text">Hassle Free Returns</h1>
                            <h2 className="textSmol">Easy and flexible 7 days return policy</h2>
                        </div>
                    </article>
                    <article>
                        <img src={product} alt="product" />
                        <div className="fdetails">
                            <h1 className="text">Hassle Free Returns</h1>
                            <h2 className="textSmol">Easy and flexible 7 days return policy</h2>
                        </div>
                    </article>
                    <article>
                        <img src={shipping} alt="shipping" />
                        <div className="fdetails">
                            <h1 className="text">Hassle Free Returns</h1>
                            <h2 className="textSmol">Easy and flexible 7 days return policy</h2>
                        </div>
                    </article>
                    <article>
                        <img src={people} alt="people" />
                        <div className="fdetails">
                            <h1 className="text">Hassle Free Returns</h1>
                            <h2 className="textSmol">Easy and flexible 7 days return policy</h2>
                        </div>
                    </article>
                </section>
            </div>

        </Fragment>
    );
};

export default Home;







