class HttpGrafico {

    static history($q, $http, symbol ) {


        return $q(function (resolve, reject) {

            symbol = !symbol ? 'BTC' : symbol 

            let urlPath = SERVER_WEB_URL + "/information/coins/" + symbol + "/history"
 
            var req = {
                method: 'GET',
                url: urlPath,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                 }
             }

            $http(req)
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

