import { computed, makeAutoObservable } from "mobx";
import { fetchPrice } from "utils/cryptoRequests";
import { fromPromise } from "mobx-utils";

class CoinStore {
  name;
  price = 0;
  ticker;
  dateUpdated;
  extendedInfo = fromPromise(this.loadInfo());

  constructor(name, ticker) {
    makeAutoObservable(this, {
      priceInRubles: computed,
    });
    this.name = name;
    this.ticker = ticker;
    this.startInterval();
  }

  loadInfo() {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(200);
      }, 5000)
    );
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
