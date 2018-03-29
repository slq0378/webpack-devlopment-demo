const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    mode: "development",
    devtool: "inline-source-map", // 开发调试工具
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:'/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "输出资源管理"
        }),
        new CleanWebpackPlugin(['dist']),
        new ManifestPlugin(),
    ]
};