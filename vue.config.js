const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    // 启动服务之后是否打开 浏览器页面  部分操作系统可能限制不能打开
    open:true,
    // 端口
    port:8080,
    // 主机  
    host:'localhost',
    // 代理部分
    proxy:{
      // 哪些api地址需要被代码,添加一个标识
      '/api':{
        // 代理到的真实服务器地址
        target:'https://api.iynn.cn/film/api/v1',
        // 代理的服务地址和本地服务器域名是否改变
        changeOrigin:true,
        // 重写路径
        pathRewrite:{
          // https://api.iynn.cn/film/api/v1/api/getNowPlayingFilmList
          // 添加标识，但是真实的接口地址不存在这个路径,所以需要将标识替换掉
          // 匹配标识并替换为空字符串
          '^/api':''
        }
      }
    }
  }
})
