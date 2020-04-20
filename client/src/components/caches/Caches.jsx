import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CacheItem from './CacheItem';
import CacheContext from '../../context/cache/cacheContext';

const Caches = () => {
  const cacheContext = useContext(CacheContext);

  const { caches, filtered, loading, getCaches } = cacheContext;

  useEffect(() => {
    getCaches();
    // eslint-disable-next-line
  }, []);

  if (caches !== null && caches.length === 0 && !loading) {
    return (
      <div>
        <h3>Please add a cache to track</h3>
        <br />
      </div>
    );
  }

  return (
    <Fragment>
      {caches !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((cache) => (
                <CSSTransition key={cache._id} timeout={500} classNames='item'>
                  <CacheItem cache={cache} />
                </CSSTransition>
              ))
            : caches.map((cache) => (
                <CSSTransition key={cache._id} timeout={500} classNames='item'>
                  <CacheItem cache={cache} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <h3>Fetching caches...</h3>
      )}
    </Fragment>
  );
};

export default Caches;
