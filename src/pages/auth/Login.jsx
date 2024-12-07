import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { loginUser, clearErrors } from '../../slices/authSlice';
import DOMPurify from 'dompurify';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VerifiedIcon from '@mui/icons-material/Verified';
import NewReleasesIcon from '@mui/icons-material/NewReleases';


const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logError } = useSelector((state) => state.auth);
  const [formValues, setFormValues] = useState({ username: '', password: '' });

  //password hide and show
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  //handlers
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    dispatch(clearErrors());
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (logError) {
      toast(<div className='flex center g5'> < NewReleasesIcon /> {logError}</div>, { duration: 3000, position: 'top-center', style: { color: 'red' }, className: 'failed', ariaProps: { role: 'status', 'aria-live': 'polite' } });
      return;
    }
    setIsSubmitting(true);

    try {
      const sanitizedFormValues = {
        password: DOMPurify.sanitize(formValues.password),
        username: DOMPurify.sanitize(formValues.username),
      };
      console.log('processing...');
      const response = await dispatch(loginUser(sanitizedFormValues)).unwrap();
      if (response.status === true) {
        toast(<div className='flex center g5'> < VerifiedIcon /> {response.message}</div>, { duration: 3000, position: 'top-center', style: { color: 'rgb(0, 189, 0)' }, className: 'success', ariaProps: { role: 'status', 'aria-live': 'polite' } });
        navigate('/');
      } else {
        toast(<div className='flex center g5'> < NewReleasesIcon /> {response.message}</div>, { duration: 3000, position: 'top-center', style: { color: 'red' }, className: 'failed', ariaProps: { role: 'status', 'aria-live': 'polite' } });
      }
    } catch (error) {
      console.log(error);
      toast(<div className='flex center g5'> < NewReleasesIcon /> Error logging in...</div>, { duration: 3000, position: 'top-center', style: { color: 'red' }, className: 'failed', ariaProps: { role: 'status', 'aria-live': 'polite' } });
    } finally {
      setIsSubmitting(false);
    }
  }



  return (
    <Fragment>
      <Helmet>
        <title>Slasa - Amazing deals, unbeatable prices!</title>
        <meta name="description" content="Shop online at Slasa for a wide range of products at unbeatable prices. Discover great deals, high-quality items, and a seamless shopping experience. Slasa - Your go-to destination for affordable shopping!" />
        <link rel="canonical" href="https://slasa.netlify.app/login" />
      </Helmet>
      <div className='page flex center' style={{ height: '100vh', backgroundColor: 'var(--authCode)' }}>
        <form className="authBox flexcol center" onSubmit={handleLogin}>
          <h1 className="heading">Login to your account</h1>

          <input type="email" name='username' autoComplete='email' placeholder='Enter your email...' value={formValues.username} onChange={handleChange} required />

          <div className="wh relative password">
            <input type={passwordVisible ? "text" : "password"} className='wh' name='password' autoComplete="new-password" placeholder='Enter your password...' value={formValues.password} onChange={handleChange} required />
            <span onClick={togglePasswordVisibility}>
              {passwordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
          </div>

          <button type='submit' style={{ border: 'none', width: '100%' }} disabled={isSubmitting}>{isSubmitting ? 'Logging in...' : 'Login'}</button>

          <div className="minBox flexcol center">
            <p className="text">Don't have an account?&nbsp;<Link className='text hover' to='/signup'>Click here</Link></p>
            <p className="text">Forgot your password?&nbsp;<Link className='text hover' to='/new-password'>Click here</Link></p>
          </div>
        </form>
      </div>
    </Fragment>
  )
};

export default Login;




