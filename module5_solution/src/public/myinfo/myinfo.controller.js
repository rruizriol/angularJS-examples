(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['ApiPath','userInfo','menuItem'];
function MyInfoController(ApiPath,userInfo,menuItem) {
  var $controller = this;
  $controller.apipath  = ApiPath;
  $controller.userInfo = userInfo;
  $controller.menuItem = menuItem;
}


})();
