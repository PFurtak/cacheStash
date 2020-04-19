import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((cache) => (
              <CSSTransition key={cache.id} timeout={500} classNames='item'>
                <CacheItem cache={cache} />
              </CSSTransition>
            ))
          : caches.map((cache) => (
              <CSSTransition key={cache.id} timeout={500} classNames='item'>
                <CacheItem cache={cache} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Caches;
