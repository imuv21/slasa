import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';


const ProductCard = ({ id, name, imageOne, imageTwo, originalPrice, salePrice, ratings }) => {

    const [hovered, setHovered] = useState(false);

    const discountPercentage = ((originalPrice - salePrice) / originalPrice) * 100;
    const getStars = (ratings) => {
        const fullStars = Math.floor(ratings);
        const decimalPart = ratings % 1;
        const halfStar = decimalPart >= 0.25 && decimalPart <= 0.75 ? 1 : 0;
        const adjustedFullStars = decimalPart >= 0.75 ? fullStars + 1 : fullStars;
        const emptyStars = 5 - adjustedFullStars - halfStar;
        return { fullStars: adjustedFullStars, halfStar, emptyStars };
    };
    const { fullStars, halfStar, emptyStars } = getStars(ratings);

    return (
        <a className='show-img-detail-sub' href={`/product-details/${id}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>

            <div className="img-wrapper">
                <img
                    className={`product-img-size ${hovered ? 'fade-out' : 'fade-in'}`}
                    src={imageOne}
                    alt={`${name}`}
                />
                <img
                    className={`product-img-size ${hovered ? 'fade-in' : 'fade-out'}`}
                    src={imageTwo}
                    alt={`${name}`}
                />
                <div className={`discount-icon ${hovered ? 'show-btn' : 'hide-btn'}`}>{discountPercentage.toFixed(0)}% OFF</div>
                <button className={`add-to-cart-btn ${hovered ? 'show-btn' : 'hide-btn'}`}>
                    <AddShoppingCartIcon /> Add to Cart
                </button>
            </div>

            <div className='product-detail-info'>
                <p className='product-title'>{name.length > 25 ? `${name.substring(0, 25)}...` : name}</p>
                <div className='flex' style={{ gap: '10px' }}>
                    <p className='product-discount'>Rs. {Number(originalPrice).toFixed(2)}₹</p>
                    <p className='product-price'>Rs. {Number(salePrice).toFixed(2)}₹</p>
                </div>
                <div className="starCont">
                    {[...Array(fullStars)].map((_, i) => (
                        <span key={`full-${i}`} className="star"><StarIcon /></span>
                    ))}
                    {halfStar === 1 && (
                        <span className="star"><StarHalfIcon /></span>
                    )}
                    {[...Array(emptyStars)].map((_, i) => (
                        <span key={`empty-${i}`} className="dullStar"><StarOutlineIcon /></span>
                    ))}
                    &nbsp;&nbsp;<span className="textBig">{ratings}</span>
                </div>
            </div>
        </a>
    )
};

export default ProductCard