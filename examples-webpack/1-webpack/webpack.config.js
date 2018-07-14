var path = require('path');

var config = {
    entry: {
        main: './src/main'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    }
};

module.exports = config;