import React from "react";
import Store from "Store";
import { observer } from "mobx-react";

import "./App.css";

const App = observer(() => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Introduction to Mobx State Management</h1>
        <p>
          BTC Price: {Store.btc.price}$ - (Updated at):{" "}
          {Store.btc?.dateUpdated?.toLocaleTimeString()}
        </p>
        <p>
          ETH Price: {Store.eth.price}$ - (Updated at):{" "}
          {Store.eth?.dateUpdated?.toLocaleTimeString()}
        </p>
        <p>
          ADA Price: {Store.ada.price}$ - (Updated at):{" "}
          {Store.ada?.dateUpdated?.toLocaleTimeString()}
        </p>
      </header>
    </div>
  );
});

export default App;
