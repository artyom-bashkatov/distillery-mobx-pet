import React from "react";
import { fetchBtcPrice } from "utils/cryptoRequests";
import Store from "Store";
import { observer } from "mobx-react";

import "./App.css";

const App = observer(() => {
  const handleRequestBtc = async () => {
    const price = await fetchBtcPrice();
    Store.setPrice(price);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Introduction to Mobx State Management</h1>
        <h3>
          BTC Price: {Store.price}$ - (Updated at):{" "}
          {new Date().toLocaleTimeString()}
        </h3>
        <button onClick={handleRequestBtc}>Get BTC PRICE</button>
      </header>
    </div>
  );
});

export default App;
