import React from 'react';
import Sliders from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import defaulImg from '../assets/images/defaultImage.jpg';
import ProductCard from './ProductCard';

const Carousel = ({ heading, data }) => {

    const NextArrow = (props) => {
        const { style, onClick } = props;
        return (
            <div style={{ ...style, position: 'absolute', top: '50%', display: "flex", alignItems: 'center', justifyContent: 'center', background: "white", borderRadius: '50%', cursor: 'pointer', filter: 'drop-shadow(5px 5px 5px gray)', width: '40px', height: '40px', zIndex: '1', right: '0%' }} onClick={onClick}>
                <ChevronRightIcon />
            </div>
        );
    };
    const PrevArrow = (props) => {
        const { style, onClick } = props;
        return (
            <div style={{ ...style, position: 'absolute', top: '50%', display: "flex", alignItems: 'center', justifyContent: 'center', background: "white", borderRadius: '50%', cursor: 'pointer', filter: 'drop-shadow(5px 5px 5px gray)', width: '40px', height: '40px', zIndex: '1' }} onClick={onClick}>
                <ChevronLeftIcon />
            </div>
        );
    };
    const settings = {
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 7,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    nextArrow: null,
                    prevArrow: null,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: null,
                    prevArrow: null,
                },
            },
        ],
    };

    return (
        <div className='container'>
            <article><h1 className='heading'>{heading}</h1></article>
            <div className={`product-slider-cont`}>
                <Sliders {...settings}>
                    {Array.isArray(data) && data.map((pro) => (
                        <div className='show-img-detail-sup' key={pro.productId}>
                            <ProductCard name={pro.name} id={pro.productId} imageOne={pro.imageOne ? pro.imageOne : defaulImg} imageTwo={pro.imageTwo ? pro.imageTwo : defaulImg} ratings={pro.ratings} originalPrice={pro.originalPrice} salePrice={pro.salePrice} />
                        </div>
                    ))}
                </Sliders>
            </div>
        </div>

    );
};

export default Carousel;