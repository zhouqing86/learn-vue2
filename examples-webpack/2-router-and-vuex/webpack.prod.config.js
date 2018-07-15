var webpack = require('webpack');
var HtmlwebpackPlugin = require ('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var merge = require('webpack-merge');
var webpackBaseConfig =require('./webpack.config.js');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './src/main',
        vendor: ['vue', 'vue-router']
    },
    output: {
       publicPath: '/dist/',
       filename: '[name].[chunkhash:8].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash:8].css",
            chunkFilename: "[id].css"
        }),
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
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSPlugin({})
        ]
    }
});
