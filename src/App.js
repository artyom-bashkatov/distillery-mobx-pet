import React from "react";
import Store from "Store";
import { observer } from "mobx-react";

import "./App.css";

const App = observer(() => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Introduction to Mobx State Management</h1>
        {Store.coins.map((coin) => {
          return (
            <p key={coin.name}>
              {coin.name}: {coin.price}$ - (Updated at):{" "}
              {coin?.dateUpdated?.toLocaleTimeString()}
            </p>
          );
        })}
      </header>
    </div>
  );
});

export default App;
