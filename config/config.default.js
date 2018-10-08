exports.keys = 'asd'
// 添加view配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
}
// the config of news
exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
}

// 配置需要的中间件，数组顺序即为中间件的加载顺序
exports.middleware = [ 'dealRes' ]
