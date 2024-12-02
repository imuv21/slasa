import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';


const Grids = ({ nameOne, nameTwo, productData }) => {

    return (
        <section className='TwoGrids'>
            <article className="gridCont" style={{ backgroundColor: '#00dbfc' }}>
                <h1 className="heading">&nbsp;{nameOne}</h1>

                <div className="gridOne">
                    {productData && productData.length > 0 && productData.map((item) => (
                        <Fragment key={item.productId}>
                            <ProductCard id={item.productId} name={item.name} category={item.category} image={item.image} salePrice={item.salePrice} />
                        </Fragment>
                    ))}
                </div>

                <Link to='/' className='viewBtn atag'>View More</Link>
            </article>
            <article className="gridCont" style={{ backgroundColor: '#b132ff' }}>
                <h1 className="heading">&nbsp;{nameTwo}</h1>

                <div className="gridTwo">
                    {productData && productData.length > 0 && productData.map((item) => (
                        <Fragment key={item.productId}>
                            <ProductCard id={item.productId} name={item.name} category={item.category} image={item.image} salePrice={item.salePrice} />
                        </Fragment>
                    ))}
                </div>

                <Link to='/' className='viewBtn btag'>View More</Link>
            </article>
        </section>
    )
}

export default Grids