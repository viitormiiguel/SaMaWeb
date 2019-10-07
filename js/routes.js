app.config(function($routeProvider, $locationProvider, $httpProvider) {
  	//Allow Credentials
  	$httpProvider.defaults.withCredentials = true;
	$locationProvider.html5Mode({
    	enabled:true,
    	requireBase: false
	});
	// Rotas Angularjs
	$routeProvider
		.when('/',{
			templateUrl: 'views/home/goll.html',
			controller: 'GollController',
			activeTab: 'Goll'
		})
		.when('/itau',{
			templateUrl: 'views/home/itau.html',
			controller: 'ItauController',
			activeTab: 'Itau'
		})
		.when('/natu',{
			templateUrl: 'views/home/natu.html',
			controller: 'NatuController',
			activeTab: 'Natu'
		})
		.otherwise({redirectTo: '/'});

});