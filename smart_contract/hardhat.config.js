//https://eth-ropsten.alchemyapi.io/v2/MXKP6oUe2XzbdBn0fSS7FFutrGbslcIc

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/MXKP6oUe2XzbdBn0fSS7FFutrGbslcIc',
      accounts: ['6847c24f50869a1b69465c675fdfc5e002192f285ccc0d69afe70fc17d1b0c30'],
    },
  },
};