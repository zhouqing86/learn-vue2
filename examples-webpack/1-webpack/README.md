Webpack 1st chapter
===================

### install webpack

```
npm init
npm install webpack --save-dev
npm install webpack-dev-server --save-dev
npm install webpack-cli
```

### Add CSS Loader

为了能够将CSS做引入
```
npm install css-loader --save-dev
npm install style-loader --save-dev
```

### Add plugin

为了提取CSS，引入plugin
```
npm install extract-text-webpack-plugin@next --save-dev
```

### Add Vue support

```
npm install vue --save
npm install --save-dev vue-loader vue-style-loader vue-template-compiler vue-hot-reload-api
npm install --save-dev babel babel-loader babel-core babel-plugin-transform-runtime babel-preset-es2015 babel-runtime

```