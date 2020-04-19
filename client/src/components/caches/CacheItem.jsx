import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CacheContext from '../../context/cache/cacheContext';

const CacheItem = ({ cache }) => {
  const cacheContext = useContext(CacheContext);
  const { id, location, weapons, food, toiletpaper, trapped, notes } = cache;
  const { deleteCache, setCurrent, clearCurrent } = cacheContext;

  const onDelete = (e) => {
    deleteCache(id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-secondary text-left'>
        {location}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' + (trapped === 'Yes' ? 'badge-danger' : 'badge-primary')
          }>
          {'Traps? ' + trapped.charAt(0).toUpperCase() + trapped.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {weapons && (
          <li>
            <i className='fas fa-skull-crossbones'></i> Weapons: {weapons}
          </li>
        )}
        {food && (
          <li>
            <i className='fas fa-hamburger'></i> Food: {food}
          </li>
        )}
        {toiletpaper && (
          <li>
            <i className='fas fa-toilet-paper'></i> TP: {toiletpaper} rolls
          </li>
        )}
        {notes && (
          <li>
            <i className='fas fa-pencil-alt'></i> Notes: {notes}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(cache)}>
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

CacheItem.propTypes = {
  cache: PropTypes.object.isRequired,
};

export default CacheItem;
