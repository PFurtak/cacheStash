import React, { Fragment, useContext } from 'react';
import CacheItem from './CacheItem';
import CacheContext from '../../context/cache/cacheContext';

const Caches = () => {
  const cacheContext = useContext(CacheContext);

  const { caches, filtered } = cacheContext;

  if (caches.legth === 0) {
    return <h4>Add a cache location to continue</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((cache) => <CacheItem key={cache.id} cache={cache} />)
        : caches.map((cache) => <CacheItem key={cache.id} cache={cache} />)}
    </Fragment>
  );
};

export default Caches;
