
// 导出一个http方法
export default function $http(options){
  const {
    url,
    data
  } = options;
  const dataObj = {
    user_id: '5f851a02f7b7f9000121f577',
    ...data
  }
  return new Promise((reslove, reject) => {
    // 获取云函数
    uniCloud.callFunction({
      name: url,
      data: dataObj
    }).then(res => {
      console.log(res)
      if (res.result.code === 200) {
        // .then
        reslove(res.result)
      } else {
        // catch
        reject(res.result)
      }
    }).catch(err => {
      reject(err)
    })
  })
}