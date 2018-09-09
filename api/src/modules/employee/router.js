const Router = require('koa-router')

const employeeCtrl = require('./controller')

const router = new Router({ prefix: '/employee' })

router.post('/', async ctx => {
  const ownerId = '5b93d3ead113aa772077291f'
  ctx.body = await employeeCtrl.create(ownerId, ctx.request.body)
})

router.put('/:id', async ctx => {
  ctx.body = await employeeCtrl.update(ctx.params.id, ctx.request.body)
})

router.delete('/:id', async ctx => {
  ctx.body = await employeeCtrl.remove(ctx.params.id)
})

router.get('/', async ctx => {
  const ownerId = '5b93d3ead113aa772077291f'
  const searchValue = ctx.query.search || null

  const paginationOptions = {
    ...(ctx.query.page && { page: parseInt(ctx.query.page, 10) }),
    ...(ctx.query.limit && { limit: parseInt(ctx.query.limit, 10) }),
  }

  ctx.body = await employeeCtrl.getList(ownerId, searchValue, paginationOptions)
})

module.exports = router