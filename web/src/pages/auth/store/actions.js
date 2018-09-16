import api from '../api'

import {
  signInRequest,
  signInSuccess,
  signInFailure,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
} from './action-creators'

export const signIn = (credentials) => async dispatch => {
  dispatch(signInRequest())

  try {
    const { login, password } = credentials
    const user = await api.signIn(login, password)

    dispatch(signInSuccess(user))
  } catch (err) {
    const { response } = err

    console.error(err)
    dispatch(signInFailure(response.data))
  }
}

export const signUp = (credentials) => async dispatch => {
  dispatch(signUpRequest())

  try {
    const { login, password, email } = credentials
    const user = await api.signUp(login, password, email)

    dispatch(signUpSuccess(user))
  } catch (err) {
    const { response } = err

    console.error(err)
    dispatch(signUpFailure(response.data))
  }
}


