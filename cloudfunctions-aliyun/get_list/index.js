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
    name,
    page = 1,
    pageSize = 10
  } = event
  let matchObject = {}
  if (name !== '全部') {
    matchObject = {
      classify: name
    }
  }
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
    .match(
      matchObject
    )
    .project({
      content: 0
    })
    // 每次跳过多少条数据
    .skip(pageSize*(page-1))
    // 每次输出的数据
    .limit(pageSize)
    .end()
  // 2.在云数据库中找到artical的表。并得到所有数据
  // const artical = await db.collection('article')
  //   .field({
  //     // true 返回这个字段,false不返回
  //     content: false
  //   })
  //   .get();
  //返回数据给客户端
  return {
    code: 200,
    msg: '数据请求成功',
    data: artical.data
  }
};
