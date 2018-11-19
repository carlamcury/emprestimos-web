angular.module('emprestimo-web').controller('ContatoController', function ($scope, $http, $rootScope, $location, $q ) {

	$scope.msg = {}
 
	$scope.sendMsg = function ( msg ) {
 

		HttpUsuario.login( $q, $http, login )
		.then((result, error) => {
			if (error) {
				PopUp.show($rootScope, error.data.code, error )
			} else {
				let stringResult = JSON.stringify(result)
				$location.url( "/sys/#/?token=" + stringResult )
			}
		})
		.catch(erro => {
			PopUp.show($rootScope, "Aviso!", erro )
			return;
		})




	} 
 });