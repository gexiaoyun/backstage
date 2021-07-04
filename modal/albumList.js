// 定义albumList集合的模型 - 类似于mysql的表结构
const mongoose = require('../mongoose')

const AlbumListSchema = mongoose.Schema({
  name: String,
  isCover: Boolean,
  cover: String
})

module.exports = mongoose.model('AlbumList', AlbumListSchema)
