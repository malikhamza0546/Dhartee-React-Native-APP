import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import ListingReducer from './ListingReducer';

const RootReducers = combineReducers({
  AuthReducer,
  ListingReducer,
});

export default RootReducers;
