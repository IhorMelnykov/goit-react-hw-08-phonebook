import { configureStore } from '@reduxjs/toolkit'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import filterSlice from './slice/filterSlice';
import logger from 'redux-logger';
import {contactReducer} from './slice/contactSlice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterSlice,
  }, 
  
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger)],
  })

export default store;

