app.factory('EmpresaFactory', ['$http', '$q', '$rootScope', function($http, $q, $rootScope){

	var rota 	= $rootScope.$server + "TradingView/";
	var data 	= "js/data/";
	var last 	= 'https://api.iextrading.com/1.0/tops/last?symbols=';

	return{
		buscaTexto: function(id){
			return $http.get(data + id).then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			})
		},
		buscaPrice: function(id){
			return $http.get(last + id).then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			})
		},
	}

}]);