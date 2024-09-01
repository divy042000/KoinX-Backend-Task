const express = require('express');
const transactionController = require('../controllers/transactionController');

const router = express.Router();

router.get('/transactions/:address',transactionController.fetchTransactions);
router.get('/expenses/:address',transactionController.getUserExpenses);


module.exports = router;


