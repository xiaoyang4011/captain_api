'use strict';
var _ = require('lodash');

/**
 * 构建任务列表查询条件
 */
exports.builderTransTaskCondition = function(req){
	return {
		id : _.get(req, 'query.id', 0)
	};
};

/**
 * 拼装数据
 * @param tfDetail 任务详情
 * @param relationData 关联数据
 * @returns {*|{}}
 */
exports.fittingDataForTaskDetail = function(tfDetail, relationData){
	var tfDetail = _.get(tfDetail, 'info', {});

	tfDetail.sale_mgr = _.get(relationData, 'salesInfo.info', {});
	tfDetail.rules = _.get(relationData, 'ruleList.info', {});
	tfDetail.customer = _.get(relationData, 'customer.info', {});
	tfDetail.warehouse = _.get(relationData, 'warehouse.info', {});


	return tfDetail;
};