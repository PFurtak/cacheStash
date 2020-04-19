import React from 'react';
import Caches from '../caches/Caches';
import CacheForm from '../caches/CacheForm';
import CacheFilter from '../caches/CacheFilter';

const Home = () => {
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
