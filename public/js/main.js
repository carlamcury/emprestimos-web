angular.module('emprestimo-web', [
	// 'realTimeCurrencyDiretiva',
	'ngAnimate',
	'ngRoute',
	'ngResource',
	'ngLocale',
	'ngCookies',
	'ui.utils.masks',
	'angularSpinner'

]).config(function ($routeProvider, $locationProvider, $httpProvider) {

	$routeProvider.when('/', {
		templateUrl: './views/home.html',
		controller: 'HomeController'
	});
	$routeProvider.when('/details', {
		templateUrl: './views/details.html',
		controller: 'DetailsController'
	});
   	 
	$routeProvider.when('/termo-uso', {
		templateUrl: './views/termo-uso.html'
	});
	$routeProvider.when('/contato', {
		templateUrl: './views/contato.html',
		controller: 'ContatoController'

	});
	 
	$locationProvider.hashPrefix('');
});

 
 
 