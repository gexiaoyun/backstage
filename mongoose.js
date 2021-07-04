// 使用mongoose中间件,连接数据库,并独立一个js文件导出引用

const mongoose = require('mongoose')

const url = "mongodb://127.0.0.1:27017/ablum";
mongoose.connect(url, { useUnifiedTopology: true}, (err, client) => {
  if (err) {
    console.log('连接失败!!')
  }
  console.log('连接成功!!!')
})

module.exports = mongoose;
