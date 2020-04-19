import React, { useContext, useEffect } from 'react';
import Caches from '../caches/Caches';
import CacheForm from '../caches/CacheForm';
import CacheFilter from '../caches/CacheFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <CacheForm />
      <div>
        <CacheFilter />
        <Caches />
      </div>
    </div>
  );
};

export default Home;
