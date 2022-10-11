import { FETCH_ALL, CREATE, FETCH_ALL_BY_SEARCH,UPDATE, DELETE, LIKE } from '../Action/Constant';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return{...state, 
        posts:action.payload.data,
        currentPage:action.payload.currentpage,
        numberofpages:action.payload.numberofpages,
      
      };
    case FETCH_ALL_BY_SEARCH:
      return { 
        posts:action.payload
      }
    case LIKE:
      return state.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [  action.payload];
    case UPDATE:
      return state.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};