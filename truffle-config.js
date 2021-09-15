const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKey = '...';

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    // bsctestnet: {
    //   // bsc chain testnet
    //   provider: () => new HDWalletProvider('...', "https://data-seed-prebsc-1-s1.binance.org:8545"),
    //   network_id: '97', //Klaytn baobab testnet's network id
    //   gas: '8500000',
    //   gasPrice: null
    // },

    // 바오밥 테스트넷
    testnet: {
      provider: () => new HDWalletProvider(privateKey, "https://api.baobab.klaytn.net:8651"),
      network_id: '1001', //Klaytn baobab testnet's network id
      gas: '8500000',
      gasPrice: null
    },
  },
  compilers: {
    solc: {
      // 클레이튼 특성상 솔크 0.5.6 버전 사용
      version: "0.5.6"
    }
  }
};