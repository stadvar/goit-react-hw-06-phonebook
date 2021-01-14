import { combineReducers } from 'redux';
import {
  configureStore,
  createReducer,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './actions';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//*state*//
// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

const itemContactReducer = createReducer([], {
  [addContact.type]: (state, action) => {
    const search = state.find(
      el => el.name.toLowerCase() === action.payload.name.toLowerCase(),
    );
    if (search) {
      alert(`${search.name} is already in contacts.`);
      return;
    }
    return [...state, action.payload];
  },
  [deleteContact.type]: (state, action) => {
    const filtered = state.filter(el => el.id !== action.payload);
    return [...filtered];
  },
});

const filterContactReducer = createReducer('', {
  [filterContact.type]: (state, action) => action.payload,
});

const contactReducer = combineReducers({
  items: itemContactReducer,
  filter: filterContactReducer,
});

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

const persistore = { store, persistor };

export default persistore;
