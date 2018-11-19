angular.module('emprestimo-web').controller('ChartController', function ($scope, $http, $rootScope, $window, $q) {

	$scope.init = function () { }

	$scope.informacao = function (symbol) {

		HttpGrafico.history($q, $http, symbol)
			.then((result, error) => {
				if (error) {
 
					$('#line-chart').remove()

				} else {
					let eixo_x = []
					let eixo_y = []

					result.forEach(element => {

						let horaMinuto = new Date(element.last_updated * 1000).toLocaleTimeString('pt-BR').substring(0, 5)
						eixo_x.push(horaMinuto)
						eixo_y.push(parseInt(element.price))


					}, this);
					plotChart(symbol, eixo_x, eixo_y)
				}
			})




	}



	function plotChart(titulo, eixo_x, eixo_y) {


		let ctx = document.getElementById("line-chart")

		if (screen.width > 500) {
			ctx.height = 50;

		} else {
			ctx.height = 30;
		}


		var color = Chart.helpers.color;

		new Chart(ctx, {
			type: 'line',

			data: {
				labels: eixo_x,
				datasets: [{
					data: eixo_y,
					label: titulo,
					backgroundColor: '#ff9800',
					borderColor: '#007db8',
					borderWidth: 1,
					fill: true
				},

				]
			},
			options: {
				title: { display: false },
				legend: { display: false },
				tooltips: {
					enabled: false
				},

				scales: {
					yAxes: [{
						ticks: {
							fontSize: 9,
							// stepSize: 1,
							// beginAtZero: true
						}
					}],
					xAxes: [{
						ticks: {
							// fontColor: "orange",
							fontSize: 9,
							// stepSize: 1,
							// beginAtZero: true
						}
					}]
				}

			}


		});
	}

	$scope.informacao()

});