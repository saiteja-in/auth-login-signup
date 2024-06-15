import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer
});

// Configure persist settings
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create a persistor
export const persistor = persistStore(store);
