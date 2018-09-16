import { combineReducers } from 'redux'

import userReducer from '../../pages/auth/store/reducer'
import employeesReducer from '../../pages/employee/store/reducer'

export default combineReducers({
  user: userReducer,
  employees: employeesReducer,
})