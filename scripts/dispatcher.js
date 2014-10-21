class AppDispatcher {
  constructor() {
    this.listeners = [];
  }

  emit(event) {
    this.listeners.forEach((listener) => {
      listener(event);
    });
  }

  addListener(listener) {
    this.listeners.push(listener);
    return this.listeners.length - 1;
  }
}

export default AppDispatcher;