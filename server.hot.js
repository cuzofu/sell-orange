const webpack = require('webpack');
const express = require('express');
const config = require('./webpack.hot.config');
const proxyMiddleware = require('http-proxy-middleware')

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    inline: true,
    progress: true,
    stats: {
        colors: true,
    }
}));

app.use(require('webpack-hot-middleware')(compiler));

//将其他路由，全部返回index.html
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.listen(3000, function() {
    console.log('正常打开3000端口')
});
