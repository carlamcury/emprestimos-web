class HttpUsuario {

    static login($q, $http, login) {


        return $q(function (resolve, reject) {

            let urlPath = config.URL_CLIENT_TOKEN

            var searchParams = new URLSearchParams();
            searchParams.set("grant_type", "password");

            searchParams.set("username", "emprestimo-web.com/" + login.username);
            searchParams.set("password", login.password);


            var req = {
                method: 'POST',
                url: urlPath,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    'Authorization': config.HEADER_AUTHORIZATION_TEST
                },
                data: searchParams.toString()
            }

            $http(req)
                .then(function (result) {
                    if (result && result.data) {
                        resolve(result.data)
                    } else {
                        reject(result.data)
                    }

                })
                .catch(function (erro) {
                    reject(erro.data.erro)
                });
        })
    }
    static register( token, $q, $http, usuario) {
        return $q(function (resolve, reject) {

            let urlPath = config.URL_CLIENT_REGISTER
            var req = {
                method: 'POST',
                url: urlPath,
                headers: {
                    'Authorization': "Bearer " + token.access_token
                },
                data : usuario 
            }

            $http(req)
                .then(function (result) {
                    if (result && result.data) {
                        resolve(result.data)
                    } else {
                        reject(result.data)
                    }

                })
                .catch(function (erro) {
                    reject(erro.data.erro)
                });
        })
    }
    static client_credential($q, $http) {

        return $q(function (resolve, reject) {

            let urlPath = config.URL_CLIENT_TOKEN

            var searchParams = new URLSearchParams();
            searchParams.set("grant_type", "client_credentials");
 
            var req = {
                method: 'POST',
                url: urlPath,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    'Authorization': config.HEADER_AUTHORIZATION_TEST
                },
                data: searchParams.toString()
            }

            $http(req)
            .then(function (result) {
                if (result && result.data) {
                    resolve(result.data)
                } else {
                    reject(result.data)
                }

            })
            .catch(function (erro) {
                reject(erro.data.erro)
            });
        })
    }
}

