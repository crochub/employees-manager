import httpAPI from '../providers/api'

class UserResource {
  constructor () {
    this.http = httpAPI
  }

  signIn (login, password) {
    return this.http.post('/user/signin', { login, password })
  }

  register (login, password, email) {
    return this.http.post('/user/register', { login, password, email })
  }
}

export default new UserResource()