var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var publicPath = '/';

module.exports = {
  //插件项
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("css/boot.css"),
    new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    ),
    new HtmlWebpackPlugin({
      filename: 'html/index.html',
      template: 'src/html/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin('js/common.js')
  ],
  devtool: 'source-map',
  //页面入口文件配置
  entry: getEntry(),
  //入口文件输出配置
  output: {
    filename: 'js/[name].bundle.js',
    path: path.join(__dirname, './dist/'),
    publicPath: publicPath
  },
  module: {
    //加载器配置
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer' },
      { test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader','css-loader!sass-loader!autoprefixer')
      },
      { test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      // { test: /\.(png|jpg)$/, loader: 'file?name=images/[name].[ext]?[hash]'},
      // { test: /\.(html)$/, loader:'file?name=html/[name].[ext]'},
      { test: /\.vue$/,
        loader: 'vue'
      },
      { test: /\.js$/, exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        query: {
         presets: ['es2015'],
         plugins: ['transform-runtime']
        }
      }
    ]
  },
   vue: {
      loaders: {
          js: 'babel?presets[]=es2015'
      },
      postcss: [
          require('autoprefixer')()
      ]
  },
  //其它解决方案配置
  resolve: {
    root: 'E:/Project Files/commons', //绝对路径
    extensions: ['', '.js', '.json', '.scss'],
    alias: {
      Console : 'js/console.js',
      vue : 'vue/dist/vue.js'
      // Jquery:'js/jquery-1.8.0.min.js'
    }
  },
  //dev-serve
  devServer: {
    contentBase: "./src",
    publicPath: '/',
    noInfo: true, //  --no-info option
    hot: true,
    inline: true,
    colors: true,
    host: '127.0.0.1',
    port: 3001,
    historyApiFallback: true
  }
};

function getEntry() {
  var jsPath = path.resolve('src', 'js');
  var dirs = fs.readdirSync(jsPath);
  var matchs = [], files = {};
  dirs.forEach(function (item) {
    matchs = item.match(/(.+)\.js$/);
    if (matchs) {
        files[matchs[1]] = path.resolve('src', 'js', item);
    }
  });
  return files;
}