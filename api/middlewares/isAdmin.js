'use strict';

/*
 * isAdmin Middleware
 * This middleware checks if the request contains a valid admin cookie.
 * If it doesn't, rejects the request.
 */

var crypto = require(process.cwd() + '/api/services/cryptoService');

module.exports = function (req, res, next) {
	var token = req.cookies.token;
	if (!token) res.status(401).send('No token found');
	crypto.verifyToken(token, function (error, valid) {
		if (error) return res.status(500).send(error);
		if (!valid) return res.status(401).send('Invalid token');
		next();
	});
}