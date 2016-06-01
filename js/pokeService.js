(function(){
    'use strict';

    angular.module('pokemonApp')
        .service('pokeService', pokeService);

    pokeService.$inject=['$http', 'GLOBALS'];
    function pokeService($http, GLOBALS){
        var url = GLOBALS.apiUrl;

        this.searchPokemon = function(keyword){
            return $http({
                method:'GET',
                url: url + '/api/v2/pokemon/' + keyword
            });
        }; // end searchPokemon

        this.getAllPokemon = function() {
            return $http({
                method:'GET',
                url: url + '/api/v2/pokemon/'
            });
        }
    }
})();