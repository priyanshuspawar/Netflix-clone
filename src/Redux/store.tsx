import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

//custom imports below
import reducer from './reducer';

const enhancers = [
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      collapsed: true,
      // predicate: () => _DEV_,
    }),
  ),
];

const enhancer = compose(...enhancers);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig,reducer);
//@ts-ignore
export const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);