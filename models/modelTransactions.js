// models/Transaction.js
import mongoose from'mongoose';

const transactionSchema = new mongoose.Schema({
  blockNumber: String,
  timeStamp: String,
  hash: String,
  from: String,
  to: String,
  value: String,
  gas: String,
  gasPrice: String,
  isError: String,
  txreceipt_status: String,
  input: String,
  contractAddress: String,
  cumulativeGasUsed: String,
  gasUsed: String,
  confirmations: String,
  address: String, 
});

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;