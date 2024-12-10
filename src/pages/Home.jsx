import React, { Fragment, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { products, images } from '../assets/Schema';
import Carousel from '../components/Carousel';
import Grid from '../components/Grid';
import Slider from '../components/Slider';
import Loader from '../components/Loader/Loader';
const ImageSlider = lazy(() => import('../components/ImageSlider'));


const Home = () => {

    const homepage = 'https://images.unsplash.com/photo-1599104040457-fe0e8c9ae77e';

    return (
        <Fragment>
            <Helmet>
                <title>Slasa - Amazing deals, unbeatable prices!</title>
                <meta name="description" content="Shop online at Slasa for a wide range of products at unbeatable prices. Discover great deals, high-quality items, and a seamless shopping experience. Slasa - Your go-to destination for affordable shopping!" />
                <link rel="canonical" href="https://slasa.netlify.app/" />
            </Helmet>
            <div className='pageTwo flexcol center' style={{ paddingTop: '0px' }}>
                <Suspense fallback={<Loader />}>
                    <ImageSlider images={images} interval={5000} />
                </Suspense>
                <Slider />
                <Grid heading={'Featured Products'} data={products} />
                <Carousel heading={'Best Sellers'} data={products} />
            </div>
        </Fragment>
    );
};

export default Home;







