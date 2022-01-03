const HDWalletProvider = require('@truffle/hdwallet-provider')

const mnemonic = 'Secret...Do not look 😉'

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*', 
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, 'wss://ropsten.infura.io/ws/v3/b49da0cebeee467fb4415bc0df7cd08c')
      },
      network_id: 3
    }
  },

  contracts_directory: './contracts/',
  contracts_build_directory: './abis',

  compilers: {
    solc: {
      version: '^0.8.11',  
      optimizer:{
        enabled:'true',
        runs: 200
      }
    }
  },
}
