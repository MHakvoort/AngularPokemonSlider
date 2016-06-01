(function () {
    angular.module('pokemonApp')
        .factory('spinnerService', spinnerService);

    spinnerService.$inject = ['$rootScope', 'GLOBALS'];
    function spinnerService($rootScope, GLOBALS) {
        var interceptor = {};
        
        interceptor.request = function (config) {
            $rootScope.$broadcast(GLOBALS.showSpinner);
            return config;
        };

        interceptor.response = function (config) {
            $rootScope.$broadcast(GLOBALS.hideSpinner);
            return config;

        };

        return interceptor;
    }
})();