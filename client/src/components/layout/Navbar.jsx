import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import CacheContext from '../../context/cache/cacheContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const cacheContext = useContext(CacheContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearCaches } = cacheContext;

  const onLogout = () => {
    logout();
    clearCaches();
  };

  const authLinks = (
    <Fragment>
      <li>Hi, {user && user.name}!</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Sign in</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          {' '}
          <i className={icon} /> {title}{' '}
        </Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Cache Stash',
  icon: 'fas fa-radiation-alt',
};
