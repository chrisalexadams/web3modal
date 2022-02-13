# Easy Web3Modal with React :rocket:

### Metamask and WalletConnect baked in:

- `npm i` or `yarn`
- `npm start` or `yarn start`
- Add more [Providers](https://github.com/web3modal/web3modal#provider-options)
### Using with ethers

##### Ethers provider is by default. To use the connected provider, import `Web3Context` from the web3 directory present inside `src` directory.

![Alt Image text](https://github.com/chrisalexadams/web3modal/blob/master/src/images/App.png?raw=false)


##### To initialize an ethers Contract object
![Alt Image text](https://github.com/chrisalexadams/web3modal/blob/master/src/images/App%20(1).png?raw=false)


##### To connect a signer to the above Read-only contract
![Alt Image text](https://github.com/chrisalexadams/web3modal/blob/master/src/images/App%20(2).png?raw=false)


##### Or to initialize a Contract with signer
![Alt Image text](https://github.com/chrisalexadams/web3modal/blob/master/src/images/App%20(3).png?raw=false)


For more details, please refer [`ethers` documentation](https://docs.ethers.io/v5/getting-started/).


### Using with web3

You can wrap the provider received from Web3Context with web3js and use it as below
![Alt Image text](https://github.com/chrisalexadams/web3modal/blob/master/src/images/App%20(4).png?raw=false)

For more details, please refer [`web3js` documentation](https://web3js.readthedocs.io/en/v1.3.4/index.html)


## Related efforts

If you are looking for a full-suite of Ethereum dapp with Smart contracts and other features, please check out the below links:

- [create-eth-app](https://github.com/paulrberg/create-eth-app) by PaulRBerg
- [scaffold-eth](https://github.com/austintgriffith/scaffold-eth) by Austin Griffith
