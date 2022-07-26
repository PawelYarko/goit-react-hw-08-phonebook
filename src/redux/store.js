import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import authReducer from './auth/auth-slice';
import todosReducer from './todos-reducer/todos-slice';
import filter from './todos-reducer/todos-filter';


const middleware = [];

// const rootReducer = combineReducers({
//   auth: authReducer,                                //todos: todosReducer
// });

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// auth: persistReducer(authPersistConfig, authReducer),  whitelist: ['token']
// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),  
    todos: todosReducer,
    filter                                                   //persistReducer(persistConfig, rootReducer),
  }, 
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// export default store;