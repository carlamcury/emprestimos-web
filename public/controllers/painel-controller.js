angular.module('emprestimo-web').controller('PainelController', function ($scope, $http, $q) {

	$scope.coins = {}

	$scope.init = function () {


		CrimatexInformation.HttpCoins($q, $http)
			.then((ticket, error) => {
				if (!error) {
					$scope.coins = ticket
				}
			})
			.catch(erro => {
				//TODO: DESLIGAR PAINEL

			})

		CrimatexInformation.websocketCoins(function (ticket) {
			if (ticket && !ticket.msg) {
				let coin = ticket.data
				$scope.coins.forEach( function( item, index , array  ) {
					if ( item.id == coin.id ) {
						$scope.coins[index] = coin
						$scope.$apply();

					}
				})
			}
		})




	}


	$scope.init()
});