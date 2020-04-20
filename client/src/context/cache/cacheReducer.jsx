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

export default (state, action) => {
  switch (action.type) {
    case GET_CACHES:
      return {
        ...state,
        caches: action.payload,
        loading: false,
      };

    case ADD_CACHE:
      return {
        ...state,
        caches: [action.payload, ...state.caches],
        loading: false,
      };
    case DELETE_CACHE:
      return {
        ...state,
        caches: state.caches.filter((cache) => cache._id !== action.payload),
        loading: false,
      };
    case CLEAR_CACHES:
      return {
        ...state,
        caches: null,
        filtered: null,
        error: null,
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_CACHE:
      return {
        ...state,
        caches: state.caches.map((cache) =>
          cache._id === action.payload._id ? action.payload : cache
        ),
        loading: false,
      };
    case FILTER_CACHES:
      return {
        ...state,
        filtered: state.caches.filter((cache) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return (
            cache.location.match(regex) ||
            cache.notes.match(regex) ||
            cache.food.match(regex) ||
            cache.weapons.match(regex)
          );
        }),
        loading: false,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
        loading: false,
      };

    case CACHE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
