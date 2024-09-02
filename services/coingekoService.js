import fetch from 'node-fetch'; 

export const getEthereumPrice = async () => {
  const url = process.env.COINGEKO_URL;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.ethereum.inr; 
  } catch (error) {
    console.error('Error fetching Ethereum price:', error); 
    throw error; 
  }
};

