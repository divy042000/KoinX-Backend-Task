import cron from 'cron'; 
import Price from '../models/modelPrice.js'; 
import { getEthereumPrice } from '../services/coingekoService.js'; 

export const startCronJobs = () => {
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
