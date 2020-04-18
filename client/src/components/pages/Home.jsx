import React from 'react';
import Caches from '../caches/Caches';
import CacheForm from '../caches/CacheForm';

const Home = () => {
  return (
    <div className='grid-2'>
      <CacheForm />
      <div>
        <Caches />
      </div>
    </div>
  );
};

export default Home;
