// Diretiva Contato
app.directive('contact', [function () {
	return {
        restrict: 'A',
        replace: true,
        templateUrl: "views/includes/contato.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {

        }]
    }
}])