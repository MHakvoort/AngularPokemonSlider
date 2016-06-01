angular.module('pokemonApp')
    .directive('pokeDirective', pokeDirective);

pokeDirective.$inject = ['$http', 'pokeService'];
function pokeDirective() {
    return {
        template: "<p>{{ name }} <br> <img src='{{ img }}'></p>",
        restrict: 'EA',
        replace: true,
        controller: pokeController
    };

    function pokeController($scope, pokeService, $interval) {
        $scope.test = 'test directive';

        $scope.pokemon = pokeService.getAllPokemon()
            .then(function (pokemon) {
                $scope.pokemon = pokemon.data.results;

                if ($scope.pokemon.length > 0) {

                    var index = 0;
                    $interval(function(){

                        if(!angular.isDefined($scope.pokemon[index])) {
                            index = 0;
                        }

                        $scope.pokeData = pokeService.searchPokemon($scope.pokemon[index].name)
                            .then(function (pokemon) {
                                $scope.name = pokemon.data.name;
                                $scope.img = pokemon.data.sprites.front_default;
                            })

                            .catch(function (error) {
                                console.log(error);
                            });
                        index = index + 1;
                    },1000);
                }
            })

            .catch(function (error) {
                alert('ERROR: ' + error);
            })
    }

}
