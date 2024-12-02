import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

//components
import Loader from './components/Loader/Loader';
const Protector = lazy(() => import('./components/Protector'));
const Layout = lazy(() => import('./components/Layout'));

//public
const Login = lazy(() => import('./pages/auth/Login'));
const Signup = lazy(() => import('./pages/auth/Signup'));
const Otp = lazy(() => import('./pages/auth/Otp'));

//private
const Home = lazy(() => import('./pages/Home'));
const ContactUs = lazy(() => import('./pages/static/ContactUs'));
const Faq = lazy(() => import('./pages/static/Faq'));


function App() {

  const user = false;

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Toaster />
        <Routes>

          {/* private */}
          <Route element={<Protector user={user} />}>
            
          </Route>

          {/* public */}
          <Route element={<Protector user={!user} redirect='/' />}>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/verify-otp' element={<Otp />} />
          </Route>

          {/* both */}
          <Route path='/loader' element={<Layout><Loader /></Layout>} />
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/contact-us' element={<Layout><ContactUs /></Layout>} />
          <Route path='/faq' element={<Layout><Faq /></Layout>} />

          {/* not found */}
          <Route path='*' element={<div className='page flex center wh'>Are you kidding me? Kuchh bhi!</div>} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;