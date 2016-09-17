(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function ToBuyShoppingController(ShoppingListCheckOffService) {

  var controller = this;

  controller.items = ShoppingListCheckOffService.getToBuyItems();

  controller.buyItem = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {

  var controller = this;
  controller.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems  = [{ name: "diapers", quantity: 10 },
                     { name: "bottles", quantity: 6 },
                     { name: "blankets", quantity: 4 },
                     { name: "nipples", quantity: 3 },
                     { name: "pacifier", quantity: 2 },
                     { name: "bottle brush", quantity: 1 }];
  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
        return toBuyItems;
  };

  service.getBoughtItems = function () {
        return boughtItems;
  };
}

})();
