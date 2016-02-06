'use strict';

/*
 * boot.js
 * Loads requirements before booting the server.
 */

var mongoose = require('mongoose');
var async = require('async');

var db_uri = process.env.MONGOlAB_URI || 'mongodb://localhost/sampledb';

module.exports = function (callback) {
	async.series({
		connectToMongoDB: function (done) {
			mongoose.connect(db_uri, done);
		}
		// If needed, add more requirements here...
	}, callback);
}