import express from 'express';
import {fetchTransactions,getUserExpenses} from '../controllers/transactionController.js';

const router = express.Router();


router.get('/transactions/:address',fetchTransactions);
router.get('/expenses/:address',getUserExpenses);


export default router;