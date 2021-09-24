import { makeAutoObservable } from "mobx";
import CoinStore from "./Coin";
class Store {
  coins = [
    new CoinStore("Bitcoin", "XBTUSDT"),
    new CoinStore("Etherium", "ETHUSDT"),
    new CoinStore("Cardano", "ADAUSDT"),
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

const mainStore = new Store();
export { mainStore };
