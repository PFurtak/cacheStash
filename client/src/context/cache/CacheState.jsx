import React, { useReducer } from 'react';
import uuid from 'uuid';
import cacheReducer from './cacheReducer';
import CacheContext from './cacheContext';
import {
  ADD_CACHE,
  DELETE_CACHE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CACHE,
  FILTER_CACHES,
  CLEAR_FILTER,
} from '../types';

const CacheState = (props) => {
  const initialState = {
    caches: [
      {
        id: 1,
        location: 'Old Farm House',
        weapons: 'AK-47',
        food: '12lbs brown rice, 1 Pallet of ramen noodles',
        toiletpaper: 6,
        trapped: 'Yes',
        notes:
          'Old farm house at the end of Grieson street. Back entrance is armed with a claymore, safe entry point is through the locked garage. Supplies are buried in the unfinished basement.',
      },
      {
        id: 2,
        location: 'Abandoned Papermill ',
        weapons: 'Samurai Sword, Glock-19, Winchester .30-06 hunting rifle',
        food:
          '3lbs deer jerky, 2lbs instant ramen noodles, 3 buckets of harvested buts and berries, 38gals clean water, 32 cans of Spam',
        toiletpaper: 118,
        trapped: 'No',
        notes:
          'Abandoned papermill on Flat Shoals road. Home base, fortified with barriers and armed lookout squad.',
      },
      {
        id: 3,
        location: 'GameStop',
        weapons: 'Benelli M4 Tactical Shotgun',
        food: '3 slices of Avacodo Toast',
        toiletpaper: 652,
        trapped: 'Yes',
        notes:
          "Gamestop in Buckhead. Primary cache of toilet paper. Heavily fortified. Parking lot armed with landmines, sniper on watch from adjacent building, claymore armed at front door, 4 guard Dobermans roam the halls. You'll have to pry this TP from our cold dead hands.",
      },
    ],
  };
  const [state, dispatch] = useReducer(cacheReducer, initialState);

  // Future dispatch actions

  // Add Cache

  // Delete Cache

  // Set Current Cache

  // Clear Current Cache

  // Update Cache

  // Filter Caches

  // Clear Filter

  return (
    <CacheContext.Provider
      value={{
        caches: state.caches,
      }}>
      {props.children}
    </CacheContext.Provider>
  );
};

export default CacheState;
