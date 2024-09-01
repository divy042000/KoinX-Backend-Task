import mongoose from 'mongoose'; // Use `import` for Mongoose in ESM

const priceSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now }, // Schema definition with default timestamp
  price: Number, // Price field of type Number
});

const etherPrice = mongoose.model('Price', priceSchema); // Define the model

export default etherPrice; // Export the model as the default export
