var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var app = PRODUCTION
        ? [
            path.resolve(__dirname, 'app/index/index.js')
          ]
        : [
            path.resolve(__dirname, 'app/index/index.js'),
            'webpack-dev-server/client?http://localhost:8080/',
            'webpack/hot/dev-server'
          ]

var plugins = PRODUCTION
  ? [
      new webpack.optimize.UglifyJsPlugin({
        comments: false,
        mangle: false,
        compress: {
          warnings: true
        }
      }),
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, 'app/index/index.html'),
        inject: true
      })
    ]
  : [
      new webpack.HotModuleReplacementPlugin()
    ];

plugins.push(
  new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION)
  })
);

module.exports = {
    entry: app,
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: PRODUCTION ? '/' : '/assets/',
        filename: PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'Vue': 'vue/dist/vue.js'
        }
    },
    module: {

        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?presets=es2015',
                exclude: /node_modules/
            }
        ]
    },
    plugins: plugins
}
