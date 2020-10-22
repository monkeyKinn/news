'use strict';
// 1.创建数据库引用
const db = uniCloud.database();
const $ = db.command.aggregate;
exports.main = async (event, context) => {
  //event为客户端上传的参数
  // console.log('event : ', event)
  // 接收分类,通过分类筛选数据
  const {
    user_id,
    value
  } = event

  // 获取用户表
  const userInfo = await db.collection('user').doc(user_id).get()
  const article_likes_ids = userInfo.data[0].article_likes_ids
  // 聚合: 更精细化的去处理数据求和 分组 指定哪些字段
  // 获取数据表
  const artical = await db.collection('article')
    .aggregate()
    // 追加字段 $.in() 当前的数组里是否包含某一个字段 1.哪个字段,2.哪个数组
    .addFields({
      is_like: $.in(['$_id',article_likes_ids])
    })
    .project({
      content: 0
    })
    .match({
      title: new RegExp(value)
    })
    .end()
  //返回数据给客户端
  return {
    code: 200,
    msg: '数据请求成功',
    data: artical.data
  }
};
