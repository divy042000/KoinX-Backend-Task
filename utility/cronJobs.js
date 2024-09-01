const cron = require('cron');
const Price = require('../models/Price');
const { getEthereumPrice } = require('../services/coingeckoService');

const startCronJobs = () => {
  const fetchPriceJob = new cron.CronJob('*/10 * * * *', async () => {
    try {
      const price = await getEthereumPrice();
      const priceDoc = new Price({ price });
      await priceDoc.save();
      console.log('Fetched and saved Ethereum price:', price);
    } catch (error) {
      console.error('Error in cron job fetching price:', error);
    }
  });

  fetchPriceJob.start();
};

module.exports = { startCronJobs };


