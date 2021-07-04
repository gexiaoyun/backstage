const Router = require('koa-router')()
const controller = require('../controller')
Router.get('/list', controller.list)

module.exports = Router;