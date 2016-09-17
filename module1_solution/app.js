(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.message = "";
  $scope.dishes  = "";

  $scope.clearMessage = function() {
    if($scope.dishes.length == 0) {
      $scope.message = "";
    }
  }

  $scope.checkProcess = function() {
    var message = getMessage($scope.dishes);
    $scope.message = message;
  };

  function getMessage(dishes) {
    if(dishes.length > 0) {

      var arrayOfDishes = dishes.split(",");
      if(arrayOfDishes.length <= 3) {
        return "Enjoy!"
      }else {
        return "Too much!";
      }

    }else {
      return "Please enter data first"
    }
  }

}

})();
