const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// 设置express使用配置文件webpack.config.js 和 webpack-dev-middleware
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.listen(3000, function() {
    console.log('Example app listening on the port 3000\n');
});