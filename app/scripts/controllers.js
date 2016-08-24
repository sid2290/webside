angular.module('confusionApp')
      .controller('MenuController', [ '$scope' , 'menuFactory', function( $scope, menuFactory ) {
                     
            $scope.dishes = [];
          console.log($scope.dishes);
            menuFactory.getDishes()
                .then(
                function(response) {
                    $scope.dishes = response.data;
                    console.log($scope.dishes);
                    console.log(response);
                }
            );
            $scope.showDetails = false;

            $scope.toggleDetails = function() {
            $scope.showDetails = !$scope.showDetails;
            };
            console.log($scope.dishes);
                       }]);