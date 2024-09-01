const fetch = require('node-fetch');

const getEthereumPrice = async () => {
  const url = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.ethereum.inr;
  } catch (error) {
    console.error('Error fetching Ethereum price:', error);
    throw error;
  }
};



// // Usage example
// getEthereumPrice()
//   .then(price => console.log(`Current Ethereum price: ${price} INR`))
//   .catch(error => console.error('Failed to get Ethereum price:', error));