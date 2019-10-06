app.factory('ConstructionFactory', ['$http', '$q', '$rootScope', function($http, $q, $rootScope){

	var construction 	= $rootScope.$server+"/constructions/company/";

	return{
		getAllByCompany: function(companyId){
			return $http.get(construction + companyId).then(function(response){
				return response.data;
			}, function(errResponse){
				return $q.reject(errResponse);
			});
		}
	}
}]);
