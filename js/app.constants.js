(function () {
    'use strict';

    angular.module('pokemonApp')
        .constant('GLOBALS', {
            appName: 'Pokemon App!',
            appVersion: '1.0.0',
            apiUrl: 'http://pokeapi.co/',
            hideSpinner: 'hideSpinner',
            showSpinner: 'showSpinner'
        });
})();