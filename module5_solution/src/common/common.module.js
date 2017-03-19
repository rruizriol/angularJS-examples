(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://mighty-bastion-64965.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
