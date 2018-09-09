import axios from 'axios'

import store from '../store'

const httpAPI = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 5000
})

httpAPI.interceptors.request.use(
  function (config) {
    const state = store.getState()
    const { user: { token = null } } = state

    if (token) {
      config.headers['X-Auth-Token'] = token
    }

    return config
  },
  function (err) { Promise.reject(err) })

export default httpAPI