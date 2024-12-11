import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import cartImg from '../../assets/images/defaultImage.jpg';
import { products } from '../../assets/Schema';


const Cart = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 3;
    const total_results = products?.length;
    const total_pages = Math.ceil(total_results / pageSize);

    //quantity
    const [quantities, setQuantities] = useState(
        products.reduce((acc, _, index) => {
            acc[index] = 1;
            return acc;
        }, {})
    );
    const increase = (index) => {
        setQuantities((prev) => ({
            ...prev, [index]: prev[index] + 1,
        }));
    };
    const decrease = (index) => {
        setQuantities((prev) => ({
            ...prev, [index]: prev[index] > 1 ? prev[index] - 1 : 1,
        }));
    };
    const handleQuantity = (index, e) => {
        const value = parseInt(e.target.value, 10) || 1;
        setQuantities((prev) => ({
            ...prev, [index]: value > 0 ? value : 1,
        }));
    };

    //discount totalprice
    const discount = (ogPrice, salePrice) => {
        const discountPercentage = ((ogPrice - salePrice) / ogPrice) * 100;
        return discountPercentage.toFixed(0);
    }
    const totalPrice = (salePrice, quantity) => {
        const totalPrice = (salePrice || 0) * quantity;
        return totalPrice.toFixed(2);
    }

    const subTotal = products.reduce((sum, item, index) => {
        return sum + (item.salePrice || 0) * (quantities[index] || 1);
    }, 0);


    //pagination
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= total_pages) {
            setCurrentPage(newPage);
        }
    };
    const paginatedItems = products.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );


    return (
        <Fragment>
            <Helmet>
                <title>Slasa - Amazing deals, unbeatable prices!</title>
                <meta name="description" content="Shop online at Slasa for a wide range of products at unbeatable prices. Discover great deals, high-quality items, and a seamless shopping experience. Slasa - Your go-to destination for affordable shopping!" />
                <link rel="canonical" href="https://slasa.netlify.app/cart" />
            </Helmet>

            <section className='pageTwo flexcol center'>
                <article className='flex center-start wh'><h1 className='heading'>Shopping Cart</h1></article>
                <section className='cartCont'>

                    <article className='cartProducts'>
                        {paginatedItems && paginatedItems.length > 0 && paginatedItems.map((item, index) => (
                            <article key={index} className='cartproCont'>
                                <img src={item.image || cartImg} className='cartImg' alt={`${item.name}-${index}`} />
                                <div className='cartDetailCont'>
                                    <div className="cartDetail">
                                        <p className="text">{item.name}</p>
                                        <div className='cartPriceBox'>
                                            <p className='product-discounThree'>Rs. {Number(item.originalPrice).toFixed(2)}₹</p>
                                            <p className='product-priceThree'>Rs. {Number(item.salePrice).toFixed(2)}₹</p>
                                            <div className='discount-iconThree'>{discount(item.originalPrice, item.salePrice)}% OFF</div>
                                        </div>
                                        <button>Remove</button>
                                    </div>
                                    <div className="cartBtnsCont">
                                        <p className='product-priceThree'>Rs. {totalPrice(item.salePrice, quantities[index])}₹</p>
                                        <div className="plusMinusCartCont">
                                            <div onClick={() => increase(index)}><AddIcon /></div>
                                            <input type="number" value={quantities[index]} onChange={(e) => handleQuantity(index, e)} min={1} />
                                            <div onClick={() => decrease(index)}><RemoveIcon /></div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </article>

                    <article className='cartCalc'>
                        <article><h1 className='heading'>Cart Summary</h1></article>
                        <div className="flexcol center g5 wh">
                            <input className='applyInput' type="text" placeholder='Enter the code' />
                            <button style={{ width: '100%' }}>Apply coupon</button>
                        </div>
                        <div className="flexcol start-center wh g5">
                            <div className="flex center-space wh">
                                <p className="textBig">Subtotal</p>
                                <p className="textBig">Rs. {subTotal}₹</p>
                            </div>
                            <p className="textSmol">Tax included. Shipping calculated at checkout.</p>
                        </div>
                        <button style={{ width: '100%' }}>Buy Now</button>
                    </article>

                </section>

                {total_results > pageSize && (
                    <div className="pagination">
                        <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                            Previous
                        </button>
                        <span>{`Page ${currentPage} of ${total_pages}`}</span>
                        <button disabled={currentPage === total_pages} onClick={() => handlePageChange(currentPage + 1)}>
                            Next
                        </button>
                    </div>
                )}
            </section>
        </Fragment>
    );
};

export default Cart;