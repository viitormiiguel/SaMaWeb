app.factory('VagaFactory', ['$http', '$q', '$rootScope', function($http, $q, $rootScope){

	var rota = $rootScope.$server+"/vacancies/";

	return{
		criaVaga: function(data){
			return $http.post(rota, data).then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			})
		},
		listaVaga: function(id_obra){
			return $http.get(rota+"construction/"+id_obra).then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			})
		},
		buscaVaga: function(id){
			return $http.get(rota+id).then(function(response){
				return response;
			}, function(errResponse){
				return $q.reject(errResponse);
			})
		},
		atualizaVaga: function(data){
			return $http.put(rota, data).then(function(response){
				return response.data;
			},function(errResponse){
				return $q.reject(errResponse);
			})
		},
		selecionaVaga: function(vaga, data){
			return $http.post(rota+vaga+'/selected', data).then(function(response){
				return response.data;
			},function(errResponse){
				return $q.reject(errResponse);
			})
		},
		favoritaProf: function(vaga, data){
			return $http.post(rota+vaga+'/favorited', data).then(function(response){
				return response.data;
			},function(errResponse){
				return $q.reject(errResponse);
			})
		}
	}

}]);