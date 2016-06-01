
(function () {
    'use strict';

    angular.module('pokemonApp', ['ngRoute'])
        .config(configFunction);

    configFunction.$inject = ['$routeProvider', '$httpProvider']; // minify safe DI!
    function configFunction($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl  : 'views/home.html',
                controller   : 'pokeHomeController',
                controllerAs : 'vm'
            })
            .when('/detail/:id', {
                templateUrl  : 'views/detail.html',
                controller   : 'pokeDetailController',
                controllerAs : 'vm'
            });

        $httpProvider.interceptors.push('spinnerService');
    }
})();