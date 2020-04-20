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
  GET_CACHES,
  CLEAR_CACHES,
} from '../types';

const CacheState = (props) => {
  const initialState = {
    caches: null,
    current: null,
    filtered: null,
    error: null,
  };
  const [state, dispatch] = useReducer(cacheReducer, initialState);

  // Get caches
  const getCaches = async () => {
    try {
      const res = await axios.get('/api/caches');
      dispatch({ type: GET_CACHES, payload: res.data });
    } catch (err) {
      dispatch({ type: CACHE_ERROR, payload: err.response.msg });
    }
  };

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
  const deleteCache = async (id) => {
    try {
      await axios.delete(`/api/caches/${id}`);

      dispatch({ type: DELETE_CACHE, payload: id });
    } catch (err) {
      dispatch({ type: CACHE_ERROR, payload: err.response.msg });
    }
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
  const updateCache = async (cache) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(`/api/caches/${cache._id}`, cache, config);
      dispatch({ type: UPDATE_CACHE, payload: res.data });
    } catch (err) {
      dispatch({ type: CACHE_ERROR, payload: err.response.msg });
    }
  };

  // Filter Caches
  const filterCaches = (text) => {
    dispatch({ type: FILTER_CACHES, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // Clear caches
  const clearCaches = () => {
    dispatch({ type: CLEAR_CACHES });
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
        getCaches,
        clearCaches,
      }}>
      {props.children}
    </CacheContext.Provider>
  );
};

export default CacheState;
