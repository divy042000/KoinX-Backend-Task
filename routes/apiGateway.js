const express = require('express');
const {fetchTransactions,getUserExpenses} = require('../controllers/transactionController');

const router = express.Router();

router.get('/transactions/:address',fetchTransactions);
router.get('/expenses/:address',getUserExpenses);


module.exports = router;


