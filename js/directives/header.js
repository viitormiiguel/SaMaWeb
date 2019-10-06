
app.directive('header', [function () {
	return {
		restrict: 'A',
		replace: true,
		templateUrl: "views/includes/header.html",
		controller: ['$scope', '$filter', '$rootScope', '$location', 'LoginFactory', '$cookieStore', '$timeout', '$route', '$cookieStore',
		function ($scope, $filter, $rootScope, $location, LoginFactory, $cookieStore, $timeout, $route, $cookieStore) {
			
			$rootScope.activetab 	= $location.path();
			$scope.drop				= $cookieStore.get('profile');
			var control 			= this;

			$scope.logado 			= $cookieStore.get('session_id');
			
			if(!$rootScope.name){
				$rootScope.name 		= $cookieStore.get('name');
			} else {
				$rootScope.name;
			}			

			$scope.login = function(){
				if($rootScope.activetab == '/')
					$location.path('/login-empresa');
				else
					if($rootScope.activetab == '/profissionais')
						$location.path('login-profissional');
			}

			$scope.cadastro = function(){
				if($rootScope.activetab == '/')
					$location.path('/cadastro-empresas');
				else
					if($rootScope.activetab == '/profissionais')
						$location.path('cadastro-profissionais');
			}

			$scope.conta = function(){
				if($scope.drop == 'company')
					$location.path('/conta');
				else
					$location.path('/conta-profissional');	
			}

			//Função Logout
			$scope.logout = function(){
				LoginFactory.logout().then(function(response){
					$cookieStore.remove('__ngDebug');
					$cookieStore.remove('connect.sid');
					$cookieStore.remove('session_id');
					$cookieStore.remove('profile');
					$cookieStore.remove('code_const');
					$cookieStore.remove('name');
					$rootScope.user_login	= false;
					$location.path("/");
				}, function(errResponse){
					console.log(errResponse);
				})
			}
			if($scope.logado){
				$rootScope.user_login	= true;
			} else {
				$rootScope.user_login	= false;
			}
		}]
	}
}])
