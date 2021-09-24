import React from "react";
import { mainStore } from "Store";
import { reaction } from "mobx";
import { observer } from "mobx-react";

import Coin from "components/Coin";

import "./App.css";

const App = observer(() => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Introduction to Mobx State Management</h1>
        {mainStore.coins.map((coin) => {
          return <Coin key={coin.name} coin={coin} />;
        })}
        <p>Etherium price changes: {mainStore.coins[1].countChanges}</p>
      </header>
    </div>
  );
});

reaction(
  () => mainStore.coins[1].price,
  (value, previousValue) => {
    if (value !== previousValue) {
      mainStore.coins[1].changeCount();
      console.info("data changed from reaction: ", value);
    }
  }
);

export default App;
