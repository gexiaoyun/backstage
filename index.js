const Koa = require('koa2')
const bodyParser = require('koa-bodyparser');
const cors = require("koa2-cors");

const Router = require('./router')
const app = new Koa()
app.use(cors())
app.use(bodyParser()) // 解析request.body

const middleWare = require('./middleware')

middleWare(app) // 使用中间件
app.use(Router.routes()).use(Router.allowedMethods())

app.listen(3000)