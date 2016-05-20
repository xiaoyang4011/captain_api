'use strict';

module.exports = function(app) {

	app.use('/api/v1/task', require('./api/task'));
};