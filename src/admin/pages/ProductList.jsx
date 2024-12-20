import React, { Fragment } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../../assets/schema';
import defaulImg from '../../assets/images/defaultImage.jpg';


const ProductList = () => {
    return (
        <Fragment>
            <article className="sortCat">
                <h1 className="heading">Products List</h1>
                <select name="sort">
                    <option value="atoz">Alphabetically A to Z</option>
                    <option value="ztoa">Alphabetically Z to A</option>
                    <option value="atoz">Price High to Low</option>
                    <option value="atoz">Price Low to High</option>
                </select>
            </article>

            <div className="adminGrid">
                {products && products.length > 0 && products.map((pro, index) => (
                    <Fragment key={index}>
                        <ProductCard name={pro.name} id={pro.productId} imageOne={pro.imageOne ? pro.imageOne : defaulImg} imageTwo={pro.imageTwo ? pro.imageTwo : defaulImg} ratings={pro.ratings} originalPrice={pro.originalPrice} salePrice={pro.salePrice} />
                    </Fragment>
                ))}
            </div>
        </Fragment>
    )
}

export default ProductList