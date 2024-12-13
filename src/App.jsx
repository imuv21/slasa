import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

//components
import Loader from './components/Loader/Loader';
const Protector = lazy(() => import('./components/Protector'));
const Layout = lazy(() => import('./components/Layout'));

//public
const Login = lazy(() => import('./pages/auth/Login'));
const Signup = lazy(() => import('./pages/auth/Signup'));
const Otp = lazy(() => import('./pages/auth/Otp'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));
const NewPassword = lazy(() => import('./pages/auth/NewPassword'));

//private
const Profile = lazy(() => import('./pages/auth/Profile'));
const Cart = lazy(() => import('./pages/shop/Cart'));
const Order = lazy(() => import('./pages/shop/Order'));

//both
const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/shop/Search'));
const ProductDetails = lazy(() => import('./pages/shop/ProductDetails'));
const Category = lazy(() => import('./pages/shop/Category'));

const ContactUs = lazy(() => import('./pages/static/ContactUs'));
const AboutUs = lazy(() => import('./pages/static/AboutUs'));
const Privacy = lazy(() => import('./pages/static/Privacy'));
const Refund = lazy(() => import('./pages/static/Refund'));
const Shipping = lazy(() => import('./pages/static/Shipping'));
const Term = lazy(() => import('./pages/static/Term'));

//admin panel


function App() {

  const user = useSelector((state) => state.auth.user);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Toaster />
        <Routes>

          {/* private */}
          <Route element={<Protector user={user} />}>
            <Route path='/profile' element={<Layout><Profile /></Layout>} />
            <Route path='/cart' element={<Layout><Cart /></Layout>} />
            <Route path='/orders' element={<Layout><Order /></Layout>} />
          </Route>

          {/* public */}
          <Route element={<Protector user={!user} redirect='/' />}>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/verify-otp' element={<Otp />} />
            <Route path='/verify-password' element={<ForgotPassword />} />
            <Route path='/new-password' element={<NewPassword />} />
          </Route>

          {/* both */}
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/product-details/:id' element={<Layout><ProductDetails /></Layout>} />
          <Route path='/search-results' element={<Layout><Search /></Layout>} />
          <Route path='/category' element={<Layout><Category /></Layout>} />


          <Route path='/contact-us' element={<Layout><ContactUs /></Layout>} />
          <Route path='/about-us' element={<Layout><AboutUs /></Layout>} />
          <Route path='/privacy-policy' element={<Layout><Privacy /></Layout>} />
          <Route path='/shipping-policy' element={<Layout><Shipping /></Layout>} />
          <Route path='/return-policy' element={<Layout><Refund /></Layout>} />
          <Route path='/terms-and-conditions' element={<Layout><Term /></Layout>} />

          {/* not found */}
          <Route path='*' element={<div className='page flex center wh'>Are you kidding me? Kuchh bhi!</div>} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;