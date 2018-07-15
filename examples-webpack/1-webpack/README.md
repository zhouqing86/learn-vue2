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

For compile CSS, introduce loaders
```
npm install css-loader --save-dev
npm install style-loader --save-dev
```

### Add plugin

For extract CSS, introduce plugin
```
npm install extract-text-webpack-plugin@next --save-dev
```

### Add Vue support

```
npm install vue --save
npm install --save-dev vue-loader vue-style-loader vue-template-compiler vue-hot-reload-api
npm install --save-dev babel babel-loader babel-core babel-plugin-transform-runtime babel-preset-es2015 babel-runtime

```

### Add url loader and file loader to support image

```
npm install --save-dev url-loader file-loader
```

### Add production package support

```
npm install --save-dev webpack-merge html-webpack-plugin
```

Replace extract-text-webpack plugin with mini-css-extract-plugin

可以查看文档[https://www.npmjs.com/package/mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)

```
npm install mini-css-extract-plugin --save-dev
npm install optimize-css-assets-webpack-plugin --save-dev
```

注意Entry中区分了main和vendor。另为了使得vendor的hash值与main的hash值不一样，使用了chunkhash而不是hash。










