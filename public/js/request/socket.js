
const URL_CRIMATEX_INFORMATION_WEBSOCKET = 'wss://emprestimo-web.com/ws'
const URL_CRIMATEX_INFORMATION_HTTP = 'https://emprestimo-web.com/information'


class CrimatexInformation {

    static HttpCoins($q, $http) {
        return $q(function (resolve, reject) {

            let urlPath = URL_CRIMATEX_INFORMATION_HTTP + '/coins'
            var req = {
                method: 'GET',
                url: urlPath,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                 },
            }

            $http(req).then(function (result) {
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
    static websocketCoins(callback) {

        let socket = new WebSocket( URL_CRIMATEX_INFORMATION_WEBSOCKET + "/coins")

        socket.onopen = function (event) {
            let script = { commad: "init", type: "coins" }
            socket.send(JSON.stringify(script))
        }

        socket.onmessage = function (event) {
            let ticket = JSON.parse( event.data )
            callback(ticket)
        }

    }


}
