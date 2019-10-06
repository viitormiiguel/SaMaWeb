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
			templateUrl: 'views/home/empresa.html',
			controller: 'HomeEmpresaController',
			activeTab: 'empresa'
		})
		.otherwise({redirectTo: '/'});

});