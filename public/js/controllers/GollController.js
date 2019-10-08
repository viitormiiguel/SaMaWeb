app.controller('GollController', ['$rootScope', '$location', '$scope', '$http', 'EmpresaFactory', '$cookieStore', '$route', '$timeout', 
	function($rootScope, $location, $scope, $http, EmpresaFactory, $cookieStore, $route, $timeout){

	$rootScope.activetab 	= $location.path();
	var control 			= this;
	$scope.id 				= $cookieStore.get('session_id');
	$scope.rootImg 			= 'img/wordcloud/';

	$scope.img_pos = $scope.rootImg + "goll4_p.png";
	$scope.img_neg = $scope.rootImg + "goll4_n.png";
	$scope.file = 'results/polaritySentiLexPre_goll4.csv';

	var chart = LightweightCharts.createChart(document.body, { width: 400, height: 300 });
	var lineSeries = chart.addLineSeries();
	lineSeries.setData([
	    { time: '2019-04-11', value: 80.01 },
	    { time: '2019-04-12', value: 96.63 },
	    { time: '2019-04-13', value: 76.64 },
	    { time: '2019-04-14', value: 81.89 },
	    { time: '2019-04-15', value: 74.43 },
	    { time: '2019-04-16', value: 80.01 },
	    { time: '2019-04-17', value: 96.63 },
	    { time: '2019-04-18', value: 76.64 },
	    { time: '2019-04-19', value: 81.89 },
	    { time: '2019-04-20', value: 74.43 },
	]);
	chart.timeScale().fitContent();


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

	control.buscaPrice = function(id){
		EmpresaFactory.buscaPrice(id).then(function(response){
			console.log(response)
	},function(errResponse){
			console.log(errResponse);
		});
	}
	control.buscaPrice('GOL');

}]);