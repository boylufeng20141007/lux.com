/**
 * @description 打印常用信息
 * @date 2016-11-4
 * @author boylufeng@gmail.com
 */
'use strict';

let colors = require('colors');
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

let print = {
	error: function(msg){
		if( !msg ) return;

		if( typeof msg === 'string' ){
			console.log(msg.error);
		}

		if( typeof msg === 'object' ){
			console.log( msg.toString().error );
		}
	},
	success: function(msg){},
	warn: function(msg){},
	tips: function(msg){}
};

module.exports = print;