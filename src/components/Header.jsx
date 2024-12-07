import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ExpandMore, Menu } from '@mui/icons-material';
import { toast } from 'react-hot-toast';

import logo from '../assets/images/sett-logo.png';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedIcon from '@mui/icons-material/Verified';
import NewReleasesIcon from '@mui/icons-material/NewReleases';


const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const [isHovered, setIsHovered] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    //burger
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const home = () => {
        navigate('/');
    }

    const logoutHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(logout());
            sessionStorage.clear();
            toast(<div className='flex center g5'> < VerifiedIcon /> Logout successfully!</div>, { duration: 3000, position: 'top-center', style: { color: 'rgb(0, 189, 0)' }, className: 'success', ariaProps: { role: 'status', 'aria-live': 'polite' } });
            navigate('/login');
        } catch (error) {
            toast(<div className='flex center g5'> < NewReleasesIcon /> Error logging out...</div>, { duration: 3000, position: 'top-center', style: { color: 'red' }, className: 'failed', ariaProps: { role: 'status', 'aria-live': 'polite' } });
        }
    }

    const postSearch = (e) => {
        e.preventDefault();
        navigate(`/search-results?query=${searchInput}`);
        setSearchInput('');
    }

    const searchHandler = (e) => {
        if (e.key === 'Enter') {
            postSearch(e);
        }
    }


    return (
        <Fragment>
            
            <div className='header'>
                <div className="flex center g10">
                    <div className='header-burger' onClick={toggleMobileMenu}>
                        <Menu />
                    </div>
                    <img className='logo' onClick={home} src={logo} alt="slasa" />
                </div>
                <div className='searchCont'>
                    <input type="text" value={searchInput} placeholder='Search products...' onChange={(e) => setSearchInput(e.target.value)} onKeyDown={searchHandler} />
                    <SearchIcon onClick={postSearch} />
                </div>
                <div className="nav-mobile">
                    {!user && <Link to="/login" className="cartIcon"><h1 className='textBig'>Log in</h1></Link>}
                    {!user && <Link to="/signup" className="cartIcon"><h1 className='textBig'>Sign up</h1></Link>}
                    {user && <Link to="/cart" className="cartIcon">
                        <LocalMallIcon />
                        <div className="cartcount">12</div>
                    </Link>}
                    <div className="cartIcon profileIcon" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <AccountCircleIcon className='header-icon' />
                        <div className={`hover-div ${isHovered ? 'visible' : ''}`}>
                            <Link to='/' className='text'>Home page</Link>
                            {user && <Link to='/profile' className='text'>Profile</Link>}
                            {user && <Link to='/orders' className='text'>Orders</Link>}
                            <Link to='/contact-us' className='text'>Contact us</Link>
                            <Link to='/about-us' className='text'>About us</Link>
                            {user && <Link onClick={logoutHandler} className='text'>Logout</Link>}
                        </div>
                    </div>
                </div>
            </div>

            <section className="catHeader">
                <article className="catItem">
                    <h1 className='textBig'>All Services</h1>
                    <ExpandMore />
                </article>
                <article className="catItem">
                    <h1 className='textBig'>All Categories</h1>
                    <ExpandMore />
                </article>
                <article className="catItem">
                    <h1 className='textBig'>Display Stand Acrylic</h1>
                </article>
                <article className="catItem">
                    <h1 className='textBig'>Gift Items</h1>
                </article>
                <article className="catItem">
                    <h1 className='textBig'>Digital Printing</h1>
                </article>
                <article className="catItem">
                    <h1 className='textBig'>Display Stand</h1>
                </article>
                <article className="catItem">
                    <h1 className='textBig'>Display Danglers</h1>
                </article>
                <article className="catItem">
                    <h1 className='textBig'>Shop Now</h1>
                </article>
            </section>

            {mobileMenuOpen && <div className="overlay visible" onClick={toggleMobileMenu}></div>}

            <div className={`drawer ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
                    <div className='searchContTwo'>
                        <input type="text" placeholder='Search products...' />
                        <SearchIcon />
                    </div>

                    <Link to="/">Home page</Link>
                    {!user && <Link to="/login">Login</Link>}
                    {!user && <Link to="/signup">Signp</Link>}

                    {user && <Link to='/profile' className='text'>Profile</Link>}
                    {user && <Link to="/cart">Cart</Link>}
                    {user && <Link to='/orders' className='text'>Orders</Link>}

                    <Link to='/contact-us' className='text'>Contact us</Link>
                    <Link to='/about-us' className='text'>About us</Link>

                    {user && <Link onClick={logoutHandler}>Logout</Link>}
                </div>
            </div>

        </Fragment>
    )
};

export default Header;