import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import login from 'Login/reducer';

export default combineReducers({
  login,
  routing
  // ...appReducers
  // other reducers go here
});
