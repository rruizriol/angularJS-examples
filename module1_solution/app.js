(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.message = "";
  $scope.dishes  = "";

  $scope.checkProcess = function() {
    var message = getMessage($scope.dishes);
    $scope.message = message;
  };

  function getMessage(dishes) {
      var arrayOfDishes = dishes.split(",");
      if(arrayOfDishes.length == 0) {
        return "Please enter data first"
      }else if(arrayOfDishes.length <= 3) {
        return "Enjoy!"
      }else {
        return "Too much!";
      }
  }

}

})();
