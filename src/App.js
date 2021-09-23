import React from "react";
import Store from "Store";
import { observer } from "mobx-react";

import Coin from "components/Coin";

import "./App.css";

const App = observer(() => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Introduction to Mobx State Management</h1>
        {Store.coins.map((coin) => {
          return <Coin key={coin.name} coin={coin} />;
        })}
      </header>
    </div>
  );
});

export default App;
