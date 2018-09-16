import httpAPI from '../../providers/api'

class UserResource {
  constructor () {
    this.http = httpAPI
  }

  signIn (login, password) {
    return this.http.post('/user/signin', { login, password }).then(res => res.data)
  }

  signUp (login, password, email) {
    return this.http.post('/user/register', { login, password, email }).then(res => res.data)
  }
}

export default new UserResource()