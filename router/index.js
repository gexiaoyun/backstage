const Router = require('koa-router')
const albumList = require('./albumList')
const router = new Router();
router.use('/albumList', albumList.routes(), albumList.allowedMethods())


module.exports = router
