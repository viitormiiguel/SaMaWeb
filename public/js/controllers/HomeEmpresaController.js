app.controller('HomeEmpresaController', ['$rootScope', '$location', '$scope', '$http', 'EmpresaFactory', '$cookieStore', '$route', '$timeout', 
	function($rootScope, $location, $scope, $http, EmpresaFactory, $cookieStore, $route, $timeout){

	$rootScope.activetab 	= $location.path();
	var control 			= this;
	$scope.id 				= $cookieStore.get('session_id');

	$scope.img_pos = "img/wordcloud/goll4_p.png";
	$scope.img_neg = "img/wordcloud/goll4_n.png";
	// $scope.file = 'brfs3.json';
	$scope.file = 'polaritySentiLexPre_ciel3.csv';

	control.buscaTexto = function(id){
		EmpresaFactory.buscaTexto(id).then(function(response){
			console.log(response);
			$scope.obras = response.data;
		},function(errResponse){
			console.log(errResponse);
		});
	}
	control.buscaTexto($scope.file);

}]);