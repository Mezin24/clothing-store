import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import { rootReducer } from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const middleWares = [
  process.env.NODE_ENV === 'development' && logger,
  thunk,
].filter(Boolean);

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleWares)
);
export const persistor = persistStore(store);
