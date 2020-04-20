import React, { useState, useContext, useEffect } from 'react';
import CacheContext from '../../context/cache/cacheContext';

const CacheForm = () => {
  const cacheContext = useContext(CacheContext);
  const { addCache, updateCache, current, clearCurrent } = cacheContext;

  useEffect(() => {
    if (current !== null) {
      setCache(current);
    } else {
      setCache({
        location: '',
        weapons: '',
        food: '',
        toiletpaper: '',
        trapped: 'Safe',
        notes: '',
      });
    }
  }, [cacheContext, current]);

  const [cache, setCache] = useState({
    location: '',
    weapons: '',
    food: '',
    toiletpaper: '',
    trapped: 'Safe',
    notes: '',
  });

  const { location, weapons, food, toiletpaper, trapped, notes } = cache;

  const onChange = (e) =>
    setCache({
      ...cache,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();

    if (current === null) {
      addCache(cache);
    } else {
      updateCache(cache);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{current ? 'Update Cache' : 'Add Cache Intel'}</h2>
      <input
        type='text'
        placeholder='Location'
        name='location'
        value={location}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Weapons'
        name='weapons'
        value={weapons}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Food'
        name='food'
        value={food}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Toilet paper'
        name='toiletpaper'
        value={toiletpaper}
        onChange={onChange}
      />
      <textarea
        rows='4'
        cols='30'
        placeholder='Description...'
        name='notes'
        value={notes}
        onChange={onChange}
      />
      <br />
      <h4>Is this location armed with traps?</h4>
      <input
        type='radio'
        name='trapped'
        value='Safe'
        checked={trapped === 'Safe'}
        onChange={onChange}
      />{' '}
      Safe{' '}
      <input
        type='radio'
        name='trapped'
        value='Trapped'
        checked={trapped === 'Trapped'}
        onChange={onChange}
      />{' '}
      Trapped{' '}
      <div>
        <input
          type='submit'
          value={current ? 'Update' : 'Add Cache'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Cancel
          </button>
        </div>
      )}
    </form>
  );
};

export default CacheForm;
