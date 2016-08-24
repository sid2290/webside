angular.module('confusionApp')
        .constant("baseURL","http://localhost:3000/")
        .service('menuFactory',[ '$http' , 'baseURL', function($http,baseURL) {

             this.getDishes = function(){
                      return $http.get(baseURL+"dishes");
                                    };
            //console.log(this);
            
            
        }]);