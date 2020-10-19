'use strict';
// 1.创建数据库引用
const db = uniCloud.database();

exports.main = async (event, context) => {
  //event为客户端上传的参数
  // console.log('event : ', event)
  // 2.在云数据库中找到label的表。并得到所有数据
  const label = await db.collection('label').get();

  //返回数据给客户端
  return {
    code: 200,
    msg: '数据请求成功',
    data: label.data
  }
};
