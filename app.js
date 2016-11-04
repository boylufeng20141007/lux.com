/**
 * @description 服务启动入口
 * @date 2016-11-4
 * @author boylufeng@gmail.com
 */
'use strict';

const PORT = 6789;

let http = require('http');
let koa  = require('koa');
let app  = koa();

let print = require('./utils/print');

app.use(function *(next){
	this.body = this.url;
	yield next;
});

app.on('error', function(err, ctx){
	console.log('-------- error --------');
	console.log(err);
	console.log('-------- error --------');
});

http.createServer(app.callback()).listen(PORT);