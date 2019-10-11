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
    $rootScope.$server = "http://localhost:8080/";
});

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.headers.common["Accept"] = "*/*";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
}]);


