import React from 'react';
import PropTypes from 'prop-types';

const CacheItem = ({ cache }) => {
  const { id, location, weapons, food, toiletpaper, trapped, notes } = cache;

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
        <button className='btn btn-dark btn-sm'>Edit</button>
        <button className='btn btn-danger btn-sm'>Delete</button>
      </p>
    </div>
  );
};

export default CacheItem;
