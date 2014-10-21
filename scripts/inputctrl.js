
class InputCtrl {
  constructor(cartStore, cartActions) {
    this.cartStore = cartStore;
    this.cartActions = cartActions;
    this.resetItems();

    cartStore.addListener(() => this.resetItems());
  }

  resetItems() {
    this.items = this.cartStore.cartItems();
  }

  removeItem(item) {
    //to be implemented
  }
}

export default InputCtrl;