require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

function mnemonic() {
  return process.env.PRIVATE_KEY;
}

function mnemonicAlice() {
  return process.env.PRIVATE_KEY_ALICE;
}

const settings = {
  optimizer: {
    enabled: true,
    runs: 200,
  },
};

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      { version: '0.8.1', settings },
      { version: '0.8.0', settings },
      { version: '0.6.2', settings },
      { version: '0.5.16', settings },
      { version: '0.4.25', settings },
      { version: '0.5.3', settings },
    ],
  },
  networks: {
    hardhat: {
      accounts: {
        // mnemonic: 'test test test test test test test test test test test junk', //助记池 BIP39 定义的 12 或 24 个单词的助记词。默认值：""
        // count: 3,
        // mnemonic: "rain avocado wreck advice winner unfold egg sketch fragile weird wealth spawn",
      },
    },
    localhost: {
      url: 'http://localhost:8545', // 8545   8000
      //gasPrice: 125000000000,//you can adjust gasPrice locally to see how much it will cost on production
      /*
        notice no mnemonic here? it will just use account 0 of the hardhat node to deploy
        (you can put in a mnemonic here to set the deployer locally)
      */
    },
    axon: {
      url: 'http://localhost:8000', // 8545   8000
      accounts: ["37aa0f893d05914a4def0460c0a984d3611546cfb26924d7a7ca6e0db9950a2d"]
              // "37aa0f893d05914a4def0460c0a984d3611546cfb26924d7a7ca6e0db9950a2d"
                 
      //gasPrice: 125000000000,//you can adjust gasPrice locally to see how much it will cost on production
      /*
        notice no mnemonic here? it will just use account 0 of the hardhat node to deploy
        (you can put in a mnemonic here to set the deployer locally)
      */
    },
    // rinkeby: {
    //   url: 'https://rinkeby.infura.io/v3/' + process.env.INFURA_ID, //<---- YOUR INFURA ID! (or it won't work)
    //   accounts: [mnemonic(), mnemonicAlice()],
    //   gas: 2100000,
    //   gasPrice: 8000000000,
    // },
    // kovan: {
    //   url: 'https://kovan.infura.io/v3/' + +process.env.INFURA_ID, //<---- YOUR INFURA ID! (or it won't work)
    //   accounts: [mnemonic()],
    // },
    // mainnet: {
    //   url: 'https://mainnet.infura.io/v3/' + +process.env.INFURA_ID, //<---- YOUR INFURA ID! (or it won't work)
    //   accounts: [mnemonic()],
    // },
    // ropsten: {
    //   url: 'https://ropsten.infura.io/v3/' + +process.env.INFURA_ID, //<---- YOUR INFURA ID! (or it won't work)
    //   accounts: [mnemonic()],
    // },
  },
  mocha: {
    timeout: 60000,
  },
};
