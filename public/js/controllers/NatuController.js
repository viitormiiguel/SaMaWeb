app.controller('NatuController', ['$rootScope', '$location', '$scope', '$http', 'HomeFactory', '$cookieStore', '$route', '$timeout', 
	function($rootScope, $location, $scope, $http, HomeFactory, $cookieStore, $route, $timeout){

	$rootScope.activetab 	= $location.path();
	var control 			= this;
	$scope.id 				= $cookieStore.get('session_id');
	$scope.rootImg 			= 'img/wordcloud/';

	$scope.img_pos = $scope.rootImg + "natu3_p.png";
	$scope.img_neg = $scope.rootImg + "natu3_n.png";
	$scope.file = 'results/polaritySentiLexPre_natu3.json';

	control.buscaTexto = function(id){
		HomeFactory.buscaTexto(id).then(function(response){
			$scope.textos = response.data;
			lines = $scope.textos;
			$scope.pos_t = 0;
			$scope.neg_t = 0;
			$scope.total = 0;
			$scope.texto_n = [];
			$scope.texto_p = [];
			for (var i = lines.length - 1; i >= 0; i--) {
        		l = lines[i];
        		$scope.total += 1;
        		if(l.pol.indexOf('Positivo') !== -1){
					$scope.pos_t += 1;
	        		if (l.text != ''){
	        			$scope.texto_p.push({info: l.text});
	        		}
				}
				if(l.pol.indexOf('Negativo') !== -1){
					$scope.neg_t += 1;
	        		if (l.text != ''){
	        			$scope.texto_n.push({info: l.text});
	        		}
				}
    		}
		},function(errResponse){
			console.log(errResponse);
		});
	}
	control.buscaTexto($scope.file);

	control.buscaPrice = function(id){
		HomeFactory.buscaPrice(id).then(function(response){
			precos = response;
			arPrecos = [];
			for (var i = precos.length - 1; i >= 0; i--) {
				arPrecos.push({time: precos[i]['date'], value: precos[i]['close']})
			}
			
			document.body.style.position = 'relative';

			var container = document.createElement('div');
			$("#tradingview-container").append(container);
			
			var width = 750;
			var height = 400;

			var chart = LightweightCharts.createChart(container, {
				width: width,
				height: height,
				priceScale: {
					scaleMargins: {
						top: 0.2,
						bottom: 0.2,
					},
					borderVisible: false,
				},
				timeScale: {
					borderVisible: false,
				},
				layout: {
					backgroundColor: '#ffffff',
					textColor: '#333',
				},
				grid: {
					horzLines: {
						color: '#eee',
					},
					vertLines: {
						color: '#ffffff',
					},
				},
			});

			var areaSeries = chart.addAreaSeries({
				topColor: 'rgba(255, 82, 82, 0.56)',
			  	bottomColor: 'rgba(255, 82, 82, 0.04)',
			  	lineColor: 'rgba(255, 82, 82, 1)',
			  	lineWidth: 2,
				symbol: 'GOL',
			});			

			areaSeries.setData(arPrecos);
			function businessDayToString(businessDay) {
				return businessDay.year + '-' + businessDay.month + '-' + businessDay.day;
			}

			var toolTipWidth = 100;
			var toolTipHeight = 80;
			var toolTipMargin = 15;

			var toolTip = document.createElement('div');
			toolTip.className = 'floating-tooltip-2';
			container.appendChild(toolTip);

			// update tooltip
			chart.subscribeCrosshairMove(function(param) {
				if (!param.time || param.point.x < 0 || param.point.x > width || param.point.y < 0 || param.point.y > height) {
					toolTip.style.display = 'none';
					return;
				}

				var dateStr = LightweightCharts.isBusinessDay(param.time) ? businessDayToString(param.time) : new Date(param.time * 1000).toLocaleDateString();

				toolTip.style.display = 'block';
				var price = param.seriesPrices.get(areaSeries);
				toolTip.innerHTML = '<div style="color: rgba(255, 70, 70, 1)">GOLL4</div>' +
					'<div style="font-size: 24px; margin: -3px 0px">' + Math.round(price * 100) / 100 + '</div>' +
					'<div>' + dateStr + '</div>';

				var y = param.point.y;

				var left = param.point.x + toolTipMargin;
				if (left > width - toolTipWidth) {
					left = param.point.x - toolTipMargin - toolTipWidth;
				}

				var top = y + toolTipMargin;
				if (top > height - toolTipHeight) {
					top = y - toolTipHeight - toolTipMargin;
				}

				toolTip.style.left = left + 'px';
				toolTip.style.top = top + 'px';
			});
		}, function(errResponse){
			console.log(errResponse);
		});
	}
	control.buscaPrice('gol');

}]);