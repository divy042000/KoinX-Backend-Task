// controllers/transactionController.js
const Transaction = require('../models/Transaction');
const Price = require('../models/Price');
const { getTransactions } = require('../services/etherscanService');
const { getEthereumPrice } = require('../services/coingeckoService');

const fetchTransactions = async (req, res) => {
  const { address } = req.params;

  try {
    const transactions = await getTransactions(address);
    const savedTransactions = await Transaction.insertMany(transactions.map(tx => ({ ...tx, address })));
    res.status(200).json(savedTransactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
};

const getUserExpenses = async (req, res) => {
  const { address } = req.params;

  try {
    const transactions = await Transaction.find({ address });
    const totalExpenses = transactions.reduce((acc, tx) => {
      return acc + (parseInt(tx.gasUsed) * parseInt(tx.gasPrice)) / 1e18;
    }, 0);

    const currentPriceDoc = await Price.findOne().sort({ timestamp: -1 });
    const currentPrice = currentPriceDoc ? currentPriceDoc.price : null;

    res.status(200).json({
      totalExpenses,
      currentPrice,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to calculate expenses' });
  }
};

module.exports = {
  fetchTransactions,
  getUserExpenses,
};
