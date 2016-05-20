'use strict';

var express = require('express');
var controller = require('./task.controller');

var router = express.Router();

router.get('/detail', controller.taskDetail);

module.exports = router;