import { makeAutoObservable } from "mobx";
import { fetchPrice } from "utils/cryptoRequests";

class CoinStore {
  price = 0;
  ticker;
  dateUpdated;

  constructor(ticker) {
    makeAutoObservable(this);
    this.ticker = ticker;
    this.startInterval();
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
    this.dateUpdated = new Date();
  };
}

export default CoinStore;