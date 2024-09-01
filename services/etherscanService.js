import fetch from 'node-fetch';
import 'dotenv/config';

export const getTransactions = async () => {
  const address = '0xce94e5621a5f7068253c42558c147480f38b5e0d';
  const apiKey = process.env.ETHERSCAN_API_KEY;
  console.log('API Key:', apiKey); // Be careful about logging your API key

  if (!apiKey) {
    console.error('ETHERSCAN_URL_KEY is not set in environment variables');
    throw new Error('API key is missing');
  }

  const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    
    if (data.status !== '1') {
      throw new Error(`API Error: ${data.message}`);
    }

    console.log('API Response:', data);
    return data.result;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
};

// Usage
getTransactions()
  .then(transactions => console.log('Transactions:', transactions))
  .catch(error => console.error('Failed to get transactions:', error));