import React, { useState } from "react";
import { fetchBtcPrice } from "utils/cryptoRequests";
import "./App.css";

function App() {
  const [btcPrice, setBtcPrice] = useState(0);

  const handleRequestBtc = async () => {
    const price = await fetchBtcPrice();
    setBtcPrice(price);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Introduction to Mobx State Management</h1>
        <h3>BTC Price: {btcPrice}$</h3>
        <button onClick={handleRequestBtc}>Get BTC PRICE</button>
      </header>
    </div>
  );
}

export default App;
