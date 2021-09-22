import { makeAutoObservable } from "mobx";
import { fetchBtcPrice } from "utils/cryptoRequests";

class Store {
  // observable propertie
  price = 0;

  constructor() {
    makeAutoObservable(this);
    setInterval(async () => {
      const price = await fetchBtcPrice();
      this.setPrice(price);
    }, 2000);
  }

  // action to change observable propertie
  setPrice = (price) => {
    this.price = price;
  };
}

export default new Store();
