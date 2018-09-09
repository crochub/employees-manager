const Router = require('koa-router')

const userCtrl = require('./controller')

const router = new Router({ prefix: '/user' })

router.post('/register', async ctx => {
  ctx.body = await userCtrl.register(ctx.request.body)
})

router.post('/signin', async ctx => {
  const {login, password} = ctx.request.body
  ctx.body = await userCtrl.singIn(login, password)
})

module.exports = router