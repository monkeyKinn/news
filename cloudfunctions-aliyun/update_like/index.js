'use strict';
// 1.创建数据库引用
const db = uniCloud.database();
// 数据库操作符
const dbCmd = db.command
exports.main = async (event, context) => {
  //接受两个参数
  const {
    user_id,
    article_id
  } = event

  // 获取用户信息
  const userInfo = await db.collection('user')
    // 获取id为某一个值的内容
    .doc(user_id)
    .get()
  const article_likes_ids = userInfo.data[0].article_likes_ids
  let dbCmdFuns = null
  // 点击收藏或者取消
  if (article_likes_ids.includes(article_id)) { //存在,删
    dbCmdFuns = dbCmd.pull(article_id)
  } else { // 不存在,加
    dbCmdFuns = dbCmd.addToSet(article_id)
  }
  await db.collection('user').doc(user_id).update({
    article_likes_ids: dbCmdFuns
  })
  //返回数据给客户端
  return {
    code: 200,
    msg: '数据请求成功',
    data: userInfo.data[0]
  }
};
