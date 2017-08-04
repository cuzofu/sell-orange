var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');

var server = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	stats: {
		colors: true,
	}
});

//将其他路由，全部返回index.html
server.app.get('*', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});
server.listen(3001, function() {
	console.log('正常打开3001端口')
});
