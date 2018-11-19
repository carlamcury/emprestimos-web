angular.module('emprestimo-web').service('httpInterceptor', ['$q', '$rootScope', function($q, $rootScope) {
    $rootScope.countLoader = 0;
     
    return {
        request: function(config) {
            $rootScope.isLoading = true
            return config;
        },
        response: function(response) {
            $rootScope.isLoading = false
            return response;
        },
        responseError: function(response) {
            $rootScope.isLoading = false
            if (!window.navigator.onLine) {
                response.data = getObjErroOffLine();
            }

            // PopUp.show( $rootScope ,"Aviso!","C - " + response.data.erros )
 
            return $q.reject(response);
        },
        requestError: function(rejectReason) {
            if (!window.navigator.onLine) {
                response.data = getObjErroOffLine();
            }
            // PopUp.show( $rootScope ,"Aviso!","C - " + response.data.erros )
            $rootScope.isLoading = false
            return $q.reject(rejectReason);
        }
    };
}]).config(['$httpProvider', '$provide', function($httpProvider, $provide) {
    $provide.decorator('$templateRequest', ['$delegate', function($delegate) {
        var fn = $delegate;

        $delegate = function(tpl) {

            for (var key in fn) {
                $delegate[key] = fn[key];
            }

            return fn.apply(this, [tpl, true]);
        };
        return $delegate;
    }]);

    $httpProvider.interceptors.push('httpInterceptor');
}]);

function getObjErroOffLine() {
    var objErro = {};
    objErro.titulo = "Ah, não";
    objErro.erros = ["Não há conexão com a Internet"];
    return objErro;
}