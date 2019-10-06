// Add Phones
app.directive('phones', [function () {
	return {
        restrict: 'A',
        templateUrl: 	'<div class="col-md-6">'+
			  				'<input type="text" name="cellPhone1" ng-model="personalData.phone" placeholder="(DDD) + Celular 1 *" required>'+
						'</div>',
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
        	$scope.add
        }]
    }
}])