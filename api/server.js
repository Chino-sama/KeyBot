'use strict';

/*
 * server.js
 * Mounts all routes and middleware to an express app and exports it.
 */

var express = require('express');

var app = express();

app.use('/', require(process.cwd() + '/api/routes'));

module.exports = app;