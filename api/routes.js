'use strict';

/*
 * routes.js
 * mounts all routes to app
 */

var express = require('express');
var router = express.Router();

//Mount cookie-parser and body-parser.
router.use('/', require(process.cwd() + '/api/middlewares/parsers'));

//Secure all /admin routes with auth.
router.use('/admin', require(process.cwd() + '/api/middlewares/isAdmin'));

//Serve the contents of the public folder on /public requests.
router.use('/public', express.static(process.cwd() + '/public'));

//Serve angular app on all routes. Make sure this handler is always last.
router.get('*', function (req, res) {
	res.sendFile(process.cwd() + '/index.html');
});

module.exports = router;