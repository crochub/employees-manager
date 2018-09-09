const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const db = require('./providers/db')
const verifyToken = require('./middlewares/verify-token')
const errorHandler = require('./middlewares/handle-error')
const userRouter = require('./modules/user/router')
const employeeRouter = require('./modules/employee/router')

const app = new Koa()

app
  .use(bodyParser())
  .use(errorHandler())
  .use(verifyToken())

const apiRouter = new Router({ prefix: '/api' })
const modulesRouters = [
  userRouter,
  employeeRouter,
]

modulesRouters.forEach(router => {
  apiRouter
    .use(router.routes())
    .use(router.allowedMethods())
})

app
  .use(apiRouter.routes())
  .use(apiRouter.allowedMethods())

app.listen(3000, () => {
  console.log('Api running')
})