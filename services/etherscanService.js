import fetch from "node-fetch";

export const getTransactions = async (address) => {
  const apiKey = process.env.ETHERSCAN_API_KEY;
  if (!apiKey) {
    throw new Error("API key is missing");
  }

  const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();

    if (data.status !== "1") {
      throw new Error(`API Error: ${data.message}`);
    }
    return data.result;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};
