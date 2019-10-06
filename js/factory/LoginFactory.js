app.factory('LoginFactory', ['$http', '$q', '$rootScope', '$timeout', function($http, $q, $rootScope, $timeout){

	var login 	= $rootScope.$server+"/auth/login/company";
	var prof 	= $rootScope.$server+"/auth/login/professional";
	var logout 	= $rootScope.$server+"/auth/logout";

	return{
		loginEmpresa: function(data){
			return $http.post(login, data).then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			});
		},
		loginProfissional: function(data){
			return $http.post(prof, data).then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			});
		},
		logout: function(){
			return $http.post(logout).then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			});
		}
	}


}]);