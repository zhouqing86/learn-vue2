var webpack = require('webpack');
var HtmlwebpackPlugin = require ('html-webpack-plugin');
var ExtractTextPlugin = require ('extract-text-webpack-plugin');
var merge = require('webpack-merge');
var webpackBaseConfig =require('./webpack.config.js');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig, {
    output: {
       publicPath: '/dist/',
       filename: '[name].[hash:8].js'
    },
    plugins: [
        new ExtractTextPlugin("[name].[hash:8].css"),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlwebpackPlugin({
            filename: '../index_prod.html',
            template: './index.ejs',
            inject: false
        })
    ]
});
