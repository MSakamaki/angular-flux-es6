
import AppDispatcher from './dispatcher';

class AppStore extends AppDispatcher {
  constructor() {
    super();
    this.cartItems = [];
  }

  addItem(catalogItem) {
    var items = this.cartItems.filter((i) => i.catalogItem == catalogItem);
    if (items.length === 0) {
      this.cartItems.push({qty: 1, catalogItem: catalogItem});
    } else {
      items[0].qty += 1;
    }
  }

  removeItem(cartItem) {
    var index = this.cartItems.indexOf(cartItem);
    this.cartItems.splice(index, 1);
  }

  emitChange() {
    this.emit("change");
  }
}
export default AppStore;