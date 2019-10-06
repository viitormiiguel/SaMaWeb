app.factory('ObraFactory', ['$http', '$q', '$rootScope', function($http, $q, $rootScope){

	var rota = $rootScope.$server+"/constructions/company/";
	var cria = $rootScope.$server+"/constructions/";
	var nota = $rootScope.$server+"/ratings";

	return{
		criaObra: function(data){
			return $http.post(cria, data).then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			})
		},
		listaObra: function(id_empresa){
			return $http.get(rota+id_empresa).then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			})
		},
		buscaObra: function(id){
			return $http.get(cria+id).then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			})
		},
		atualizaObra: function(data){
			return $http.put(cria, data).then(function(response){
				return response.data;
			},function(errResponse){
				return $q.reject(errResponse);
			})
		},		
		buscaRateProfessional: function(id){
			return $http.get(nota+'/construction/'+id).then(function(response){
				return response;
			},function(errResponse){
				return $q.reject(errResponse);
			})
		},
		criaRateProfessional: function(data){
			return $http.post(nota, data).then(function(response){
				return response;
			},function(errResponse){
				return $q.reject(errResponse);
			})
		},
		closeObra: function(data){
			return $http.post(cria+"/close", data).then(function(response){
				return response;
			},function(errResponse){
				return $q.reject(errResponse);
			})
		},
		openObra: function(data){
			return $http.post(cria+"/open", data).then(function(response){
				return response;
			},function(errResponse){
				return $q.reject(errResponse);
			})
		}
	}

}]);