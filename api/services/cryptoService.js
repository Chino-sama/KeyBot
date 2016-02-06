'use strict';

/*
 * Cryto Service
 * Utilities for encrypting passwords and tokens
 */

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

module.exports = {
	hash: function (payload, callback) {
		bcrypt.genSalt(10, function (error, salt) {
			bcrypt.hash(payload, salt, callback);
		});
	},
	verifyHash: function (payload, hash, callback) {
		bcrypt.compare(payload, hash, callback);
	},
	genToken: function (payload, callback) {
		jwt.sign(payload, process.env.SECRET, { expiresIn: 7200000 }, callback);
	},
	parseToken: function (token, callback) {
		jwt.decode(token, process.env.SECRET, callback);
	},
	verifyToken: function (token, callback) {
		jwt.verify(token, process.env.SECRET, callback);
	}
}