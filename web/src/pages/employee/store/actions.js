import api from '../api'

import { getList, remove} from './action-creators'

export const getEmployeesList = (search, pager) => async dispatch => {
  try {
    const result = await api.getList(search, pager)
    dispatch(getList(result))
  } catch (err) {
    console.log(err)
  }
}

export const removeEmployee = (id) => async dispatch => {
  try {
    const result = await api.remove(id)
    dispatch(remove(result))
    dispatch(getEmployeesList())
  } catch (err) {
    console.log(err)
  }
}


