import React, { useReducer } from 'react';
import axios from 'axios';
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
  CACHE_ERROR,
} from '../types';

const CacheState = (props) => {
  const initialState = {
    caches: [],
    current: null,
    filtered: null,
    error: null,
  };
  const [state, dispatch] = useReducer(cacheReducer, initialState);

  // Future dispatch actions

  // Add Cache
  const addCache = async (cache) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/caches', cache, config);

      dispatch({ type: ADD_CACHE, payload: res.data });
    } catch (err) {
      dispatch({ type: CACHE_ERROR, payload: err.response.msg });
    }
  };

  // Delete Cache
  const deleteCache = (id) => {
    dispatch({ type: DELETE_CACHE, payload: id });
  };

  // Set Current Cache
  const setCurrent = (cache) => {
    dispatch({ type: SET_CURRENT, payload: cache });
  };
  // Clear Current Cache
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update Cache
  const updateCache = (cache) => {
    dispatch({ type: UPDATE_CACHE, payload: cache });
  };
  // Filter Caches
  const filterCaches = (text) => {
    dispatch({ type: FILTER_CACHES, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <CacheContext.Provider
      value={{
        caches: state.caches,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addCache,
        deleteCache,
        setCurrent,
        clearCurrent,
        updateCache,
        filterCaches,
        clearFilter,
      }}>
      {props.children}
    </CacheContext.Provider>
  );
};

export default CacheState;
