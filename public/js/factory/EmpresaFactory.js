app.factory('EmpresaFactory', ['$http', '$q', '$rootScope', function($http, $q, $rootScope){

	var rota 	= $rootScope.$server + "TradingView/";
	var data 	= "js/data/";
	var last 	= 'https://api.iextrading.com/1.0/tops/last?symbols=';
	var iex 	= 'https://sandbox.iexapis.com/stable/stock/';
	var token 	= "Tpk_05f508a586f44e13b08d2b608fbf1fd3";
	// Dados de Producao
	// var piex    = 'https://cloud.iexapis.com/stable/stock/'
	// var ptoken 	= 'pk_6c810017e2504102957da54161587cba';

	return{
		buscaTexto: function(id){
			return $http.get(data + id).then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			})
		},
		buscaPrice: function(id){
			// 1 year historical
			return $.get(iex + id + '/chart/1y?token=' + token, function(data, status){
    			return data;
  			});
		},
		buscaCompany: function(id){
			return $.get(iex + id + '/company?token=' + token, function(data, status){
    			return data;
  			});
		}
	}

}]);