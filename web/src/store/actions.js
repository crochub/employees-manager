import TYPES from './action-types'

const signIn = data => ({
  type: TYPES.USER_SIGN_IN,
  data
})

const signOut = () => ({
  type: TYPES.USER_SIGN_OUT,
})

export default {
  signIn,
  signOut,
}