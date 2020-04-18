import {
  ADD_CACHE,
  DELETE_CACHE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CACHE,
  FILTER_CACHES,
  CLEAR_FILTER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CACHE:
      return {
        ...state,
        caches: [...state.caches, action.payload],
      };
    case DELETE_CACHE:
      return {
        ...state,
        caches: state.caches.filter((cache) => cache.id !== action.payload),
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
          cache.id === action.payload.id ? action.payload : cache
        ),
      };
    default:
      return state;
  }
};
