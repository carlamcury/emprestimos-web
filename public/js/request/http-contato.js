class HttpContato {
 
    static send ( $q , $http , msg ) {
        return $q(function(resolve, reject) {
    
            let urlPath = config.URL_CLIENT_TOKEN
            var req = {
                method: 'POST',
                url:  urlPath ,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    'Authorization': config.HEADER_AUTHORIZATION_TEST
                },
                data: msg
            }
    
            $http( req )
                .then(function (result) {
                     if (result && result.data) {
                        resolve(result.data)
                    } else {
                        reject(result)
                    }
    
                })
                .catch(function (erro) {
                    console.log(erro);
                    reject(erro)
                });
        })
    }
    static register ($q, $http, paymentRequest ) {
        return $q(function(resolve, reject) {

            let urlPath = config.URL_CLIENT_REGISTER 
            var req = {
                method: 'POST',
                url:  urlPath ,
                headers: {
                  'Authorization': config.HEADER_AUTHORIZATION_TEST
                }
            }
    
            $http( req )
                .then(function (result) {
                     if (result && result.data) {
                        resolve(result.data)
                    } else {
                        reject(result)
                    }
    
                })
                .catch(function (erro) {
                    console.log(erro);
                    reject(erro)
                });
        })
    }
  
}

 