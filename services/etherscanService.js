// services/etherscanService.js
const axios = require('axios');

const getTransactions = async (address) => {
  const apiKey = process.env.ETHERSCAN_API_KEY;
  const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`;
  
  try {
    const response = await axios.get(url);
    return response.data.result;
  } catch (error) {
    throw new Error('Error fetching transactions'); 
  }
};

module.exports = { getTransactions };
