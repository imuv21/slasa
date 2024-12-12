import React, { Fragment, lazy, Suspense, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { products } from '../../assets/schema';
import Loader from '../../components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import defaulImg from '../../assets/images/defaultImage.jpg';
const ProductCard = lazy(() => import('../../components/ProductCard'));


const Search = () => {

    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 5;
    const total_results = products?.length;
    const total_pages = Math.ceil(total_results / pageSize);

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
                <link rel="canonical" href="https://slasa.netlify.app/search-results" />
            </Helmet>

            <section className='pageTwo flexcol center'>

                <div className="sortCat">
                    <h1 className="textBig">Search results for - {query}</h1>
                    <select name="sort">
                        <option value="atoz">Alphabetically A to Z</option>
                        <option value="ztoa">Alphabetically Z to A</option>
                        <option value="atoz">Price High to Low</option>
                        <option value="atoz">Price Low to High</option>
                    </select>
                </div>

                <div className="categoryGrid">
                    {paginatedItems && paginatedItems.length > 0 && paginatedItems.map((pro) => (
                        <Fragment key={pro.productId}>
                            <Suspense fallback={<Loader />}>
                                <ProductCard name={pro.name} id={pro.productId} imageOne={pro.imageOne ? pro.imageOne : defaulImg} imageTwo={pro.imageTwo ? pro.imageTwo : defaulImg} ratings={pro.ratings} originalPrice={pro.originalPrice} salePrice={pro.salePrice} />
                            </Suspense>
                        </Fragment>
                    ))}
                </div>

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

export default Search;