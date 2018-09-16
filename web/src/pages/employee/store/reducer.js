import { handleActions } from 'redux-actions'

import { getList, remove } from './action-creators'

const defaultState = {
  items: [],
  pager: {
    total: 0,
    page: 0,
    limit: 10,
  },
}

export default handleActions({
  [getList]: (state, { payload: { docs, limit, page, total } }) => {
    const normalizedPage = page - 1 || 0

    return {
      ...state,
      items: docs,
      pager: { limit, total, page: normalizedPage }
    }
  },
  [remove]: (state) => {
    return { ...state }
  },
}, defaultState)