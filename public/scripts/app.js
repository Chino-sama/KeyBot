/*
 * Client app
 */

//Load angular
var angular = require('angular')

//Require all dependencies
require('angular-route');
require('angular-cookies');
require('angular-touch');

//Build app and mount dependencies
angular.module('app', ['ngRoute', 'ngCookies', 'ngTouch']);

//Mount custom modules
require('./appControllers');
require('./appDirectives');
require('./appServices');
require('./appFilters');

//Set routes
require('./appRoutes');