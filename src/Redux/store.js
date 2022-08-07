import {createStore, compose} from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import rootReducer from '../reducers';
import RootReducers from '../Redux/Reducers';
import {applyMiddleware} from 'redux';
// import {createLogger} from 'redux-logger';
// import {createStore} from 'redux';
// const logger = createLogger();
const configureStore = () => {
  return createStore(RootReducers);
};
export default configureStore;

// const persistConfig = {
//   key: 'reducer-key',
//   storage: AsyncStorage,
// };
// const pReducer = persistReducer(persistConfig, RootReducers);
// const middleware = applyMiddleware(thunk);
// const store = createStore(pReducer, middleware);
// const persistor = persistStore(store);
// export {persistor, store};
