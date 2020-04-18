import React, { useState, useContext } from 'react';
import CacheContext from '../../context/cache/cacheContext';

const CacheForm = () => {
  const cacheContext = useContext(CacheContext);

  const [cache, setCache] = useState({
    location: '',
    weapons: '',
    food: '',
    toiletpaper: '',
    trapped: 'No',
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
    cacheContext.addCache(cache);
    setCache({
      location: '',
      weapons: '',
      food: '',
      toiletpaper: '',
      trapped: 'No',
      notes: '',
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add Cache Intel</h2>
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
      <input
        type='text'
        placeholder='Description'
        name='notes'
        value={notes}
        onChange={onChange}
      />
      <h5>Is this location armed with traps?</h5>
      <input
        type='radio'
        name='trapped'
        value='No'
        checked={trapped === 'No'}
        onChange={onChange}
      />{' '}
      No{' '}
      <input
        type='radio'
        name='trapped'
        value='Yes'
        checked={trapped === 'Yes'}
        onChange={onChange}
      />{' '}
      Yes{' '}
      <div>
        <input
          type='submit'
          value='Add Cache'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default CacheForm;
