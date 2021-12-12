import logo from "./images/ethereumLogo.png";
import "./App.css";
import React, { useContext } from "react";
import { Web3Context } from "./web3";


function App() {
  const { account, connectWeb3, logout } = useContext(Web3Context);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="ethereum_logo" />
        <div>
          {account == null ? (
            <div class="btn-text-right">
            <button onClick={connectWeb3}>Connect to Ethereum</button>
            </div>
          ) : (
            <div>
               <p>Account: {" "}
              {account.slice(0, 4) +
            "..." +
            account.slice(38, 42)}
              </p>
              <button onClick={logout}>Logout</button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
