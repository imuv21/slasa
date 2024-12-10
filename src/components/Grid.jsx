import React, { Fragment } from 'react';
import ProductCard from './ProductCard';
import defaulImg from '../assets/images/defaultImage.jpg';

const Grid = ({ heading, data }) => {
    return (
        <div className='container'>
            <article><h1 className='heading'>{heading}</h1></article>
            <div className="grid">
                {
                    data && data.length > 0 &&  data.slice(0, 10).map((pro, index) => (
                        <Fragment key={index}>
                            <ProductCard name={pro.name} id={pro.productId} imageOne={pro.imageOne ? pro.imageOne : defaulImg} imageTwo={pro.imageTwo ? pro.imageTwo : defaulImg} ratings={pro.ratings} originalPrice={pro.originalPrice} salePrice={pro.salePrice} />
                        </Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default Grid