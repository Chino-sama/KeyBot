'use strict';

/*
 * index.js
 * App's entry point
 * Boots server.
*/

var server = require('./api/server');

var port = process.env.PORT || 8000;
var db_uri = process.env.MONGOlAB_URI || 'mongodb://localhost/sampledb';

var boot = require('./api/boot');

boot(function () {
	server.listen(port, function () {
		console.log('Server running on port:', port);
	});
});