// 批量导出文件

const requireApi = require.context(
  // api 目录的相对路径
  '.',
  // 是否查询子目录
  false,
  // 查询文件的一个后缀
  /.js$/
)

// 声明一个空对象
let module = {}
requireApi.keys().forEach((key, index) => {
  // 排除index.js文件
  if ('./index.js' === key) return;
  console.log("key: ",key);
  // 对象合并
  Object.assign(module, requireApi(key))
})

// 导出
export default module
