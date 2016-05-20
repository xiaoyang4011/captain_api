'use strict';

// 初始化配置
require('./config/init');

var app = require('./config/express');
var config = require('./config/config');
var mongoose = require('mongoose');
var logger = require('log4js').getLogger('crash');

mongoose.connect(config.db.uri, config.db.options);

app.listen(config.port, function(){
	logger.info('Captain server listening on %d, in %s mode', config.port, app.get('env'));
});


