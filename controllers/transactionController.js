import Transaction from '../models/modelTransactions.js';
import Price from '../models/modelPrice.js';
import { getTransactions } from '../services/etherscanService.js';

// Controller function to fetch and save transactions for a given address
export const fetchTransactions = async (req, res) => {
  const { address } = req.params; // Corrected way to access address from request parameters

  try {
    const transactions = await getTransactions(address);

    // Save transactions to the database, associating each with the address
    const savedTransactions = await Transaction.insertMany(
      transactions.map(tx => ({ ...tx, address }))
    );

    // Respond with the saved transactions
    res.status(200).json(savedTransactions);
  } catch (error) {
    console.error('Failed to fetch or save transactions:', error); // Log the error
    res.status(500).json({ error: 'Failed to fetch transactions' }); // Respond with error message
  }
};

// Controller function to get user expenses for a given address
export const getUserExpenses = async (req, res) => {
  const { address } = req.params; // Correctly extract the address

  try {
    const transactions = await Transaction.find({ address });

    // Calculate the total expenses using gas used and gas price
    const totalExpenses = transactions.reduce((acc, tx) => {
      return acc + (parseInt(tx.gasUsed) * parseInt(tx.gasPrice)) / 1e18;
    }, 0);

    // Fetch the latest Ethereum price from the database
    const currentPriceDoc = await Price.findOne().sort({ timestamp: -1 });
    const currentPrice = currentPriceDoc ? currentPriceDoc.price : null;

    // Respond with total expenses and current price
    res.status(200).json({
      totalExpenses,
      currentPrice,
    });
  } catch (error) {
    console.error('Failed to calculate expenses:', error); // Log the error
    res.status(500).json({ error: 'Failed to calculate expenses' }); // Respond with error message
  }
};
