require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/DOSnR1xxbBUweFaIusQXbYALpCQokq0q',
      accounts: ['5fd0c9deea840fc45372a6cd678f3d4a9897f4bbcafc3187d437bc4c38c41739'],
    },
  },
};

