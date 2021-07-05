const AlbumListSchema = require('../modal/albumList')

module.exports = {
  list: async(ctx) => {
    ctx.status = 200;
    // AlbumListSchema.find({}, (err, doc) =>{
    //   getState(ctx, doc)
    // })
    let data = await AlbumListSchema.find();
    if (data) {
      ctx.body = {
        success: true,
        data: data
      }
    }
  }
}