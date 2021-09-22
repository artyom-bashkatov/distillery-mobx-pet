import { makeAutoObservable } from "mobx";

class Store {
  // observable propertie
  price = 0;

  constructor() {
    makeAutoObservable(this);
  }

  // action to change observable propertie
  setPrice = (price) => {
    this.price = price;
  };
}

export default new Store();
