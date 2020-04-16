import React, { Fragment, useContext } from 'react';
import CacheItem from './CacheItem';
import CacheContext from '../../context/cache/cacheContext';

const Caches = () => {
  const cacheContext = useContext(CacheContext);

  const { caches } = cacheContext;

  return (
    <div>
      <Fragment>
        {caches.map((cache) => (
          <CacheItem cache={cache} />
        ))}
      </Fragment>
    </div>
  );
};

export default Caches;
