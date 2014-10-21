/*jshint esnext: true */

class ViewCtrl {
  constructor(catalogItems, cartActions) {
    this.cartActions = cartActions;
    this.catalogItems = catalogItems;
  }

  addToCart(catalogItem) {
    this.cartActions.addItem(catalogItem);
  }
}

export default ViewCtrl;