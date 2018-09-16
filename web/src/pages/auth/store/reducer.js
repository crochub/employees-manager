import {
  USER_SIGN_IN_REQUEST,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_FAILURE,
  USER_SIGN_UP_REQUEST,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_FAILURE,
} from './action-types'

const API_TOKEN = 'api_token'

const token = localStorage.getItem(API_TOKEN)

const initialState = {
  token: token,
  _id: null,
  login: '',
  email: '',
  isSignInProcessing: false,
  isSignUpProcessing: false,
}

function userReducer (state = initialState, action) {
  switch (action.type) {
    case USER_SIGN_IN_REQUEST:
      return Object.assign({}, state, { isSignInProcessing: true })

    case USER_SIGN_IN_SUCCESS:
      const { token, user } = action.data

      localStorage.setItem(API_TOKEN, token)

      return Object.assign({}, state, {
        token,
        _id: user._id,
        email: user.email,
        login: user.login,
        isSignInProcessing: false,
      })

    case USER_SIGN_IN_FAILURE:
      return Object.assign({}, state, { isSignInProcessing: false })

    case USER_SIGN_UP_REQUEST:
      return Object.assign({}, state, { isSignUpProcessing: true })

    case USER_SIGN_UP_FAILURE:
      return Object.assign({}, state, { isSignUpProcessing: false })

    case USER_SIGN_UP_SUCCESS:
      const { token: token2, user: user2 } = action.data

      localStorage.setItem(API_TOKEN, token2)

      return Object.assign({}, state, {
        token: token2,
        _id: user2._id,
        email: user2.email,
        login: user2.login,
        isSignUpProcessing: false,
      })

    default:
      return state
  }

  // return state
}

export default userReducer