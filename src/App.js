import React from "react";
import Store from "Store";
import { observer } from "mobx-react";

import "./App.css";

const App = observer(() => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Introduction to Mobx State Management</h1>
        <h3>
          BTC Price: {Store.price}$ - (Updated at):{" "}
          {new Date().toLocaleTimeString()}
        </h3>
      </header>
    </div>
  );
});

export default App;
