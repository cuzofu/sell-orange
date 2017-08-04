const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist/src'),
        filename: 'app.bundle.js',
        publicPath: 'src'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // 定义生产环境
                NODE_ENV: JSON.stringify('production')
            }
        }),
        // 代码压缩
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false, // remove all comments
            },
            compress: {
                warnings: false
            }
        }),
        // 分离CSS
        new ExtractTextPlugin('app.bundle.css'),
        // 自动生成index.html
        new HtmlWebpackPlugin({
            filename: '../index.html',  // 相对于 path
            template: './src/template/index.html',
            inject: 'body',
            hash: true
        })
    ]
};
