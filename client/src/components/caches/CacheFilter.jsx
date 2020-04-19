import React, { useContext, useRef, useEffect } from 'react';
import CacheContext from '../../context/cache/cacheContext';

const CacheFilter = () => {
  const cacheContext = useContext(CacheContext);
  const text = useRef('');

  const { filterCaches, clearFilter, filtered } = cacheContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterCaches(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter caches...'
        onChange={onChange}
      />
    </form>
  );
};

export default CacheFilter;
