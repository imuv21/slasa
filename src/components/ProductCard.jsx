import React from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const ProductCard = ({ id, name, category, salePrice, image }) => {

    return (
        <a href={`/search-results/${id}`} className="gridItem">
            <img src={image} alt={name} />
            <div className="subGridItem">
                <p className="textSmol">{category}</p>
                <p className="textSmol">{name.length > 15 ? `${name.substring(0, 15)}...` : name}</p>
                <p className="text">Rs. {Number(salePrice).toFixed(2)}₹</p>
                <button><LocalMallIcon />Add To Cart</button>
            </div>
        </a>
    )
}

export default ProductCard