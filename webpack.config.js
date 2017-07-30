/*
* @Author: Administrator
* @Date:   2017-07-11 10:08:31
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-30 19:26:17
*/
var HtmlWebpackPlugin = require('html-webpack-plugin')
//导出一个对象，到时候给webpack在终端中执行的时候使用
module.exports = {
  entry: './src/main.js', //项目打包的入口文件 【必须】
  output: {//打包输出文件【必须】
     path: __dirname+'/dist',
     filename: 'bundle.js'
     
  },
  module: { //Loader
    rules: [
      {
        test: /\.vue$/, //匹配以.css结尾的
        use: [
          
          {
            loader: "vue-loader"
          }
        ]
      },
      {
        test: /\.css$/, //匹配以.css结尾的
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(png|ttf|svg|gif)$/, //凡是以.png,ttf结尾的文件使用vue-loader去打包
        use: [//2.x的写法
          {
            loader: "url-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', //以参数文件生成的最终的文件名称
      template:'./template.html' //参照文件的路径
    })
  ]
}