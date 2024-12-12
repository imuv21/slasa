import React, { Fragment } from 'react';
import defaulImg from '../assets/images/defaultImage.jpg';
import { Link } from 'react-router-dom';

const Category = ({ heading, data }) => {

    return (
        <div className='container'>
            <article><h1 className='heading'>{heading}</h1></article>
            <div className="gridCat">
                {
                    data && data.length > 0 && data.slice(0, 10).map((cat, index) => (
                        <Fragment key={index}>
                            <Link to={`/category?query=${cat.name}`} className="gridCatItem">
                                <img src={cat.image ? cat.image : defaulImg} alt={cat.name} />
                                <p className="textBig">{cat.name}</p>
                            </Link>
                        </Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default Category