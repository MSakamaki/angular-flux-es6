'use strict';
/*jshint esnext: true */
/*global angular: false */

// The next line doesn't work without the ./ in Traceur!
import ViewCtrl       from './viewctrl';
import AppStore      from './store';
import AppDispatcher from './dispatcher';
import AppAction     from './actions';
import InputCtrl     from './inputctrl';


var m = angular.module('myapp', []);
m.controller("AppCtrl", ViewCtrl);
m.controller("InputCtrl", InputCtrl);

m.service("dispatcher", AppDispatcher);


//m.controller("CatalogCtrl", new CatalogCtrl());

m.value("catalogItems", [
  {id: 1, title: 'Item #1', cost: 1},
  {id: 2, title: 'Item #2', cost: 2},
  {id: 3, title: 'Item #3', cost: 3}
]);

var ADD_ITEM = "ADD_ITEM";
m.factory("cartActions", function (dispatcher) {
  return {
    addItem(item) {
      dispatcher.emit({
        actionType: ADD_ITEM,
        item: item
      });
    }
  };
});

m.factory("cartStore", function (dispatcher) {
  var cartStore = new AppStore();

  dispatcher.addListener(function (action) {
    switch(action.actionType){
      case ADD_ITEM:
        cartStore.addItem(action.item);
        break;

      //case REMOVE_ITEM:
      //  cartStore.removeItem(action.item);
      //  break;
    }
    cartStore.emitChange();
  });

  //expose only the public interface
  return {
    addListener: (l) => cartStore.addListener(l),
    cartItems: () => cartStore.cartItems
  };
});