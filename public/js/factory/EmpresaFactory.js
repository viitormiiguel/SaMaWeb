app.factory('EmpresaFactory', ['$http', '$q', '$rootScope', function($http, $q, $rootScope){

	var rota 	= $rootScope.$server + "TradingView/";
	var data 	= "js/data/";

	return{
		buscaTexto: function(id){
			return $http.get(data + id).then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			})
		},
	}

}]);