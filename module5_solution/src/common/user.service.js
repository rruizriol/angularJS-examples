(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = ['$http', 'ApiPath'];
function UserService($http, ApiPath) {
  var service = this;
  service.storedUserInfo = {};

  service.signUp = function (userInfo) {
    service.storedUserInfo = userInfo;
  };

  service.getUserInfo = function () {
    return service.storedUserInfo;
  };

  service.buildUserInfo = function () {
    var userInfo = {
      firstname: '',
      lastname: '',
      emailaddress: '',
      phone: '',
      menuItemShortName: ''
    };
    return userInfo;
  };

}



})();
