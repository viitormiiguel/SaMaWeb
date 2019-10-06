var app = angular.module('app', [
	'ngRoute', 
	'ngCookies', 
	'moment-picker', 
	'ngMessages',
	'ngCpfCnpj',
    'jkAngularRatingStars',
    'ngMask'
]);

app.run(function($rootScope, $route){
    $rootScope.$route = $route;
    // $rootScope.$server = "file:///C:/Users/vitor/Documents/GetDataset/";
    $rootScope.$server = "http://localhost:8080/";
    // if(location.hostname == 'inobra-app.com'){
    // 	$rootScope.$server = "http://inobra-app.com:3030/api/v1";    
    // } else {        
    // 	$rootScope.$server = "http://localhost:3030/api/v1";    	
    // }
});

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.headers.common["Accept"] = "*/*";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
}]);


