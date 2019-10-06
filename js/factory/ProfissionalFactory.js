app.factory('ProfissionalFactory', ['$http', '$q', '$rootScope', function($http, $q, $rootScope){

	var rota 	= $rootScope.$server+"/professionals/";
	var pag 	= $rootScope.$server+"/pagseguro/checkout";
	var cep 	= "https://api.pagar.me/1/zipcodes/"

	return{
		criaProfissional: function(data){
			return $http.post(rota, data).then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			})
		},
		buscaProfissional: function(id){
			return $http.get(rota+id).then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			})
		},
		buscaTodosProfissionais: function(){
			return $http.get(rota).then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			})
		},
		atualizaProfissional: function(data){
			return $http.put(rota, data).then(function(response){
				return response.data;
			},function(errResponse){
				return $q.reject(errResponse);
			})
		},
		pagamento: function(data){
			return $http.post(pag, data).then(function(response){
				return response.data;
			},function(errResponse){
				return $q.reject(errResponse);
			})
		},
		buscaCep: function(data){
			return $http.get(cep+data).then(function(response){
				return response.data;
			},function(errResponse){
				return $q.reject(errResponse);
			})
		},
		buscaJob: function(){
			return $http.get("js/data/jobName.json").then(function(response){
				return response;
			},function(errResponse){
				return $q.reject(errResponse);
			})
		},
		buscaSpecialization: function(){
			return $http.get("js/data/jobSpecialization.json").then(function(response){
				return response;
			},function(errResponse){
				return $q.reject(errResponse);
			})
		},
		buscaCategory: function(){
			return $http.get("js/data/jobCategories.json").then(function(response){
				return response;
			},function(errResponse){
				return $q.reject(errResponse);
			})
		},
		buscaGeral: function(data){
			return $http.post(rota+"search",data).then(function(response){
				return response;
			},function(errResponse){
				return $q.reject(errResponse);
			})
		}
	}

}]);