(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['userInfo','UserService'];
function SignupController(userInfo, UserService) {
  var $controller = this;
  $controller.userInfo = userInfo;

  $controller.signup = function() {
    UserService.signUp($controller.userInfo);
  };
}


})();
