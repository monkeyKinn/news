'use strict';
// 1.创建数据库引用
const db = uniCloud.database();
const $ = db.command.aggregate
exports.main = async (event, context) => {
  const {
    user_id,
    type
  } = event
  let matchObject = {}
  if(type !== 'all') {
    matchObject = {
    current: true 
  }
  }
  let userInfo = await db.collection('user').doc(user_id).get()
  
  userInfo = userInfo.data[0]
  // label_ids = ['label._id'] 
  //event为客户端上传的参数
  // console.log('event : ', event)
  // 2.在云数据库中找到label的表。并得到所有数据
  // const label = await db.collection('label').get();
  let label = await db.collection('label')
  .aggregate()
  .addFields({
    current: $.in(['$_id',$.ifNull([userInfo.label_ids,[]])])
  })
  .match(matchObject)
  .end()

  //返回数据给客户端
  return {
    code: 200,
    msg: '数据请求成功',
    data: label.data
  }
};
