'use strict';

var co = require('co');
var transTaskLib = require('./../../lib/trans_task');
var baseApi = require('beeper_api').baseApi;
var tfApi = require('beeper_api').tfApi;
var _ = require('lodash');

/**
 * task detail
 */
exports.taskDetail = function(req, res, next) {
	co(function *(){
		var tfDetail = yield tfApi.getTaskDetail(transTaskLib.builderTransTaskCondition(req));

		var result = yield {
			salesInfo : baseApi.getAdminUser({uid : _.get(tfDetail, 'info.sales_id', 0)}),
			ruleList : baseApi.getDriverManageRuleList(),
			customer : baseApi.getCustomer({cuid : _.get(tfDetail, 'info.customer_id', 0)}),
			warehouse : baseApi.getWarehouse({wid : _.get(tfDetail, 'info.warehouse_id', 0)})
		};

		return res.json({
			code : 0,
			msg : '获取成功',
			info : transTaskLib.fittingDataForTaskDetail(tfDetail, result)
		});
	}).catch(next);
};