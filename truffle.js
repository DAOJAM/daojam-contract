var PrivateKeyProvider = require("truffle-privatekey-provider");
var rinkebyByPrivateKey = require("./secrets").rinkebyPrivateKey;
var rinkebyProvider = require("./secrets").rinekebyUrl;

module.exports = {
  networks: {
    local: {
      host: 'localhost',
      port: 7545,
      network_id: 5777,
      gas: 5500000
    },
    rinkeby: {
      provider: new PrivateKeyProvider(rinkebyByPrivateKey, rinkebyProvider),
      network_id: 4,
      gas: 4500000
    }
  }
};
