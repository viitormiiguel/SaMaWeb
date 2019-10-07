app.controller('NatuController', ['$rootScope', '$location', '$scope', '$http', 'EmpresaFactory', '$cookieStore', '$route', '$timeout', 
	function($rootScope, $location, $scope, $http, EmpresaFactory, $cookieStore, $route, $timeout){

	$rootScope.activetab 	= $location.path();
	var control 			= this;
	$scope.id 				= $cookieStore.get('session_id');
	$scope.rootImg 			= 'img/wordcloud/';

	$scope.img_pos = $scope.rootImg + "natu3_p.png";
	$scope.img_neg = $scope.rootImg + "natu3_n.png";
	$scope.file = 'results/polaritySentiLexPre_natu3.csv';

	control.buscaTexto = function(id){
		EmpresaFactory.buscaTexto(id).then(function(response){
			$scope.textos = response.data;
			lines = $scope.textos.split('\n');
			$scope.pos_t = 0;
			$scope.neg_t = 0;
			$scope.total = 0;
			$scope.texto_n = [];
			$scope.texto_p = [];
			for (var i = lines.length - 1; i >= 0; i--) {
        		l = lines[i];
        		$scope.total += 1;
        		txt = l.split(';');
        		if(l.indexOf('Positivo') !== -1){
					$scope.pos_t += 1;
	        		if (txt[0] != ''){
	        			$scope.texto_p.push({info: txt[0]});
	        		}
				}
				if(l.indexOf('Negativo') !== -1){
					$scope.neg_t += 1;
					if (txt[0] != ''){
	        			$scope.texto_n.push({info: txt[0]});
	        		}
				}
    		}
		},function(errResponse){
			console.log(errResponse);
		});
	}
	control.buscaTexto($scope.file);

}]);