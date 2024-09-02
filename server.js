import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import {startCronJobs} from "./utility/cronJobs.js";
import apiGateway from './routes/apiGateway.js'
dotenv.config();
const app = express();
app.use(express.json());
app.use(apiGateway);

const port = process.env.PORT;
const MONGO_URL = process.env.MONGO_URI;

mongoose.connect(MONGO_URL,)
  .then(() => {
    console.log('Connected to MongoDB');
    startCronJobs();
  })
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
