import { makeAutoObservable } from "mobx";
import CoinStore from "./Coin";
class Store {
  btc = new CoinStore("XBTUSDT");
  eth = new CoinStore("ETHUSDT");
  ada = new CoinStore("ADAUSDT");

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Store();
