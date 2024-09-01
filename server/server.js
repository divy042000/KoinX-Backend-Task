require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { startCronJobs } = require('../utility/cronJobs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    startCronJobs();
  })
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
