import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Web3Provider } from "./web3";

ReactDOM.render(
  <React.StrictMode>
    <Web3Provider>
      <App />
    </Web3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);