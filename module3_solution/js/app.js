(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

  var controller = this;
  controller.found = [];
  controller.searchTerm = "";
  controller.search = false;

  controller.find = function() {
    controller.search = true;
    if(controller.searchTerm.length > 0) {
      var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
      promise.then(function (result) {
        controller.found = result;
      });
    }
  }

  controller.nothingFound = function() {
    return (controller.search && controller.found.length == 0);
  }

  controller.removeItem = function (index) {
    controller.found.splice(index, 1);
    if(controller.found.length == 0) {
      controller.search = false;
    }
  };

}

function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    templateUrl: 'html/foundItems.html',
    scope: {
      foundItems: '<',
      onRemove: '&',
      onNothingFound: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'controller',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var controller = this;
}


MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {

    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
     }).then(function (result) {

      // process result and only keep items that match
      var foundItems = [];
      for(var i = 0; i < result.data.menu_items.length; i++) {
        var item = result.data.menu_items[i];
        if(item.description.indexOf(searchTerm) >= 0) {
          foundItems.push(item);
        }
      }

      // return processed items
      return foundItems;

    });

  }


}

})();
