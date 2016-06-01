(function () {
    'use strict';

    angular.module('pokemonApp')
        .controller('pokeHomeController', pokeHomeController);

    pokeHomeController.$inject = ['pokeService', 'GLOBALS', '$scope', 'spinnerService'];
    function pokeHomeController(pokeService, GLOBALS, $scope) {
        var vm = this; // caching van 'this'  keyword in local variabele
        vm.title = GLOBALS.appName;
        vm.showSpinner = false;

        vm.searchPokemon = function (keyword) {
            pokeService.searchPokemon(keyword)
                .then(function (pokemon) {
                    vm.pokemon = pokemon.data;
                })

                .catch(function (error) {
                    alert('ERROR: ' + error);
                })
        };

        $scope.$on(GLOBALS.showSpinner, function () {
            vm.showSpinner = true;
        });

        $scope.$on(GLOBALS.hideSpinner, function () {
            vm.showSpinner = false;
        });

        vm.clearPokemon = function () {
            vm.pokemon = undefined;
        };
    }

})();