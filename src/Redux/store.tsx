import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { rootReducer, UserAuthReducer } from './reducer';


//custom imports below


const enhancers = [
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      collapsed: true,
      // predicate: () => _DEV_
    }),
  ),
];

const enhancer = compose(...enhancers);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ["UserAuthReducer"],
};

const persistedReducer = persistReducer(persistConfig,rootReducer);
//@ts-ignore
export const store = createStore(persistedReducer,undefined, enhancer);
export const persistor = persistStore(store);