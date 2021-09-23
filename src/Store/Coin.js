import { computed, makeAutoObservable } from "mobx";
import { fetchPrice } from "utils/cryptoRequests";

class CoinStore {
  name;
  price = 0;
  ticker;
  dateUpdated;

  constructor(name, ticker) {
    makeAutoObservable(this, {
      priceInRubles: computed,
    });
    this.name = name;
    this.ticker = ticker;
    this.startInterval();
  }

  get priceInRubles() {
    return this.price * 74;
  }

  startInterval = () => {
    setInterval(async () => {
      const price = await fetchPrice(this.ticker);
      this.setPrice(price);
    }, 2000);
  };

  // action to change observable propertie
  setPrice = (price) => {
    this.price = price;
    this.dateUpdated = new Date().toLocaleTimeString();
  };
}

export default CoinStore;
