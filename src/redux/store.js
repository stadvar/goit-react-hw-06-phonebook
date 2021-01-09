import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import types from './types';

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

const itemContactReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD:
      return [...state, action.payload];
    case types.DELETE:
      const filtered = state.filter(el => el.id !== action.payload);
      return [...filtered];
    default:
      return state;
  }
};

const filterContactReducer = (state = '', action) => {
  switch (action.type) {
    case types.CHANGE_FILTER:
      return action.payload;

    default:
      return state;
  }
};

const contactReducer = combineReducers({
  items: itemContactReducer,
  filter: filterContactReducer,
});

const rootReducer = combineReducers({
  contacts: contactReducer,
});

const store = createStore(rootReducer, composeWithDevTools());
export default store;
