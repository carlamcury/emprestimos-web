angular.module('emprestimo-web').controller('DetailsController', function ($scope, $http, $rootScope, $window, $q) {

	$scope.login = {}
	$scope.usuario = {}
	$scope.init = function () { 

		setTimeout( function(){
			urls = [
				'https://emprestimo-web.com/img/device-2018-10-21-173150.png',
				'https://emprestimo-web.com/img/device-2018-11-02-020211.png',
				'https://emprestimo-web.com/img/device-2018-11-02-020251.png',
				'https://emprestimo-web.com/img/device-2018-11-02-020341.png',
				'https://emprestimo-web.com/img/device-2018-11-02-020558.png',
				'https://emprestimo-web.com/img/device-2018-11-02-020609.png',
				'https://emprestimo-web.com/img/device-2018-11-02-020632.png',
				 
			]
			var urlpath = urls[Math.floor(Math.random()*urls.length)];
			$("#picture_device").attr("src",urlpath);
			$scope.init()

		} , 4000)

	}

	$scope.rotinaLogin = function (login) {


		if (login && !login.username && !login.password) {
			return PopUp.show($rootScope, "Aviso!", "E-mail ou Senha invalidos!")
		}

		HttpUsuario.login($q, $http, login)
			.then((result, error) => {
				if (error) {
					PopUp.show($rootScope, error.data.code, error)
				} else {
					let stringResult = JSON.stringify(result)
					// let url =  config.URL_CLIENT_WEB + "/sys?session=" + encodeURIComponent(stringResult) 
					let url = "http://localhost:8081/#/session?token=" + encodeURIComponent(stringResult)
					$window.location.href = url
				}
			})
			.catch(erro => {
				PopUp.show($rootScope, "Aviso!", erro)
				return;
			})




	}
	$scope.rotinaCadastroUsuario = function (usuario) {
		try {
			if (usuario &&
				!usuario.email &&
				!usuario.senha &&
				!usuario.nome &&
				!usuario.cpf
			) {
				return PopUp.show($rootScope, "Aviso!", " Dados invalidos. ")
			}

			if (!usuario.concordoTermo) {
				return PopUp.show($rootScope, "Aviso!", " Hummmm , precisamos que concorde com os termos para podermos continuar.")
			}
 			usuario.pin = 9999
			usuario.palavraSegura = tagToken()

			HttpUsuario.client_credential($q, $http)
				.then((result, error) => {

					let token = result

					HttpUsuario.register(token, $q, $http, usuario)
						.then((result, error) => {
							if (error) {
								return PopUp.show($rootScope, erro.data.code, erro.data.message)
							}
							return PopUp.show($rootScope, "Aviso!", " Muito obrigado, favor confirmar seu e-mail para validar cadastro.")

						})
						.catch(erro => {
							PopUp.show($rootScope, "Aviso!", erro )
							return;
						})
				
				})
				.catch(erro => {
					PopUp.show($rootScope, "Aviso!", erro )
					return;
				})
		

		}
		catch (erro) {
			return PopUp.show($rootScope, "Aviso!", erro)
		}
	}
	$scope.init()
});