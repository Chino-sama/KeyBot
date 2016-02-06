'use strict';

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var router = require('express').Router();

router.use('/', bodyParser.json({ limit: '50mb' }));
router.use('/', cookieParser());

module.exports = router;