import { combineReducers } from 'redux'

import userReducer from './user'
import employeesReducer from './employees'

export default combineReducers({
  user: userReducer,
  employees: employeesReducer,
})