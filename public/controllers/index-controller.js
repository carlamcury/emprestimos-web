angular.module('emprestimo-web').controller('IndexController', function($scope,$http,$rootScope) {
		
	let peer = $rootScope.newPeer

		$scope.init = function(){
			$(".button-collapse").sideNav();

		 }
		$scope.init()
		
	});