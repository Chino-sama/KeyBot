/*
 * Frontend app routes
*/

require('angular').module('app').config([
	'$routeProvider',
	'$locationProvider',
	function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: 'public/templates/home.html',
				controller: 'homeCtrl'
			})
		// Add more routes here
	}
]);