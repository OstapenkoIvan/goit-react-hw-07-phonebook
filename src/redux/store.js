//?redux-persist settings start//
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
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

//*get reducers from "configureStore" and combine to variable
const reducers = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

//*create "persistConfig" with details on how to save to local storage, whitelist/blacklist to choose state to save
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

//*create "persistReducer" for reducers to save data to local storage
const persistedReducer = persistReducer(persistConfig, reducers);

//*pass "persistedReducer" to "configureStore" instead of basic reducers, add "middleware" standard options.
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

//* create "persistor" with "persistStore" and export to index.js alongside "store"
export const persistor = persistStore(store);
//?redux-persist settings end//

//!redux standard store settings//
// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });
