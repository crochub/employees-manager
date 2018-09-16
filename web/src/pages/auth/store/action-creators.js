import {
  USER_SIGN_IN_REQUEST,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_FAILURE,
  USER_SIGN_UP_REQUEST,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_FAILURE
} from './action-types'

export const signInRequest = () => ({ type: USER_SIGN_IN_REQUEST })
export const signInSuccess = data => ({ type: USER_SIGN_IN_SUCCESS, data })
export const signInFailure = data => ({ type: USER_SIGN_IN_FAILURE, data })

export const signUpRequest = () => ({ type: USER_SIGN_UP_REQUEST })
export const signUpSuccess = data => ({ type: USER_SIGN_UP_SUCCESS, data })
export const signUpFailure = data => ({ type: USER_SIGN_UP_FAILURE, data })