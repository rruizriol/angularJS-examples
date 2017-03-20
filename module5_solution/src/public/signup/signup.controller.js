(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['userInfo','UserService','MenuService'];
function SignupController(userInfo, UserService, MenuService) {
  var $controller = this;
  $controller.userInfo = userInfo;
  $controller.favoritedishNotFound = false;
  $controller.savedInformation = false;

  $controller.signup = function() {
    var validator = MenuService.getMenuItemByShortName($controller.userInfo.menuItemShortName);
    validator.then(function(response){

      $controller.favoritedishNotFound = false;
      $controller.savedInformation = true;

      UserService.signUp($controller.userInfo);
    }).catch(function(error){
      $controller.favoritedishNotFound = true;
      $controller.savedInformation = false;
    });

  };
}


})();
