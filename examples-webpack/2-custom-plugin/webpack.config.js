var path = require('path');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

var config = {
    entry: {
        main: './src/main'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js',
        chunkFilename: '[id].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "/dist/main.css",
            chunkFilename: "[id].css"
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        /**
         * Vue v2.x之后NPM Package默认设置只会生成runtime-only 版本，若要使用standalone功能則需如下设置
         * 否则会报错：Failed to mount component: template or render function not defined.
         */
        alias: {
            vue: 'vue/dist/vue.js'
        },
        extensions: ['.js', '.vue']
    }
};

module.exports = config;