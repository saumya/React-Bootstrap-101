//
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import DummyReducer from './DummyReducer'
import OneReducer from './OneReducer'
import UIStateReducer from './UIStateReducer'
import LoginStatusReducer from './LoginStatusReducer'

// Where the names are same as the State/Data , there is no need for a key-value, its automatic.
// Else provide a matching key-value pair Data-Reducer
const MyAppReducers = combineReducers({
  UIState:UIStateReducer,
  LoginStatus:LoginStatusReducer,
  DummyReducer,
  OneReducer,
  routing: routerReducer
});

export default MyAppReducers
