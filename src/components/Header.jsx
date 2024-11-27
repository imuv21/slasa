import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ExpandMore, Menu } from '@mui/icons-material';
import Drawer from '@mui/material/Drawer';
import logo from '../assets/images/logo.png';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    //burger
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <Fragment>
            <div className='header'>
                <div className="flex center g10">
                    <div className='header-burger' onClick={toggleMobileMenu} >
                        <Menu />
                    </div>
                    <img className='logo' src={logo} alt="slasa" />
                </div>
                <div className='searchCont'>
                    <input type="text" placeholder='Search products...' />
                    <SearchIcon />
                </div>
                <div className="nav-mobile">
                    {/* <h1 className='textBig'>Log in</h1>
                    <h1 className='textBig'>Sign up</h1> */}
                    <div className="cartIcon">
                        <LocalMallIcon />
                        <div className="cartcount">12</div>
                    </div>
                    <AccountCircleIcon />
                </div>
            </div>
            <section className="catHeader">
                <article className="catItem">
                    <h1 className='textBig'>Shop All</h1>
                    <ExpandMore />
                </article>
                <article className="catItem">
                    <h1 className='textBig'>Shop by Occasions</h1>
                    <ExpandMore />
                </article>
                <article className="catItem">
                    <h1 className='textBig'>Custom Made</h1>
                    <ExpandMore />
                </article>
                <article className="catItem">
                    <h1 className='textBig'>Canvas Paintings</h1>
                    <ExpandMore />
                </article>
                <article className="catItem">
                    <h1 className='textBig'>Neon</h1>
                </article>
                <article className="catItem">
                    <h1 className='textBig'>New Arrivals</h1>
                </article>
                <article className="catItem">
                    <h1 className='textBig'>Today's Deals</h1>
                </article>
                <article className="catItem">
                    <h1 className='textBig'>Flash Sale</h1>
                </article>
            </section>
            <Drawer anchor="left" open={mobileMenuOpen} onClose={toggleMobileMenu}>
                <div className='drawer' onClick={toggleMobileMenu} onKeyDown={toggleMobileMenu}>
                    <div className='searchContTwo'>
                        <input type="text" placeholder='Search products...' />
                        <SearchIcon />
                    </div>
                    {user && <Link to="/">Home</Link>}
                    {user && <Link to="/cart">Cart</Link>}
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signp</Link>
                    {user && <Link to="/logout">Logout</Link>}
                </div>
            </Drawer>
        </Fragment>
    )
};

export default Header;