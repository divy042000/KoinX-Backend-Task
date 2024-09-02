## Features

- Retrieves Ethereum transactions associated with a particular user address.
- Computes the cumulative gas fees incurred for these transactions.
- Regularly updates and maintains the latest Ethereum price.
- Offers API interfaces to retrieve transaction details and calculate gas costs

## Technologies Used

- Node.js: JavaScript execution environment.
- Express: Web development framework for Node.js.
- MongoDB: NoSQL database for storing user transactions and Ethereum price data.
- Node-Fetch: HTTP client library for making API calls.
- Mongoose: Object modeling tool for interacting with MongoDB from Node.js.
- Node-Cron: Task scheduling library for automating recurring tasks.

## Installation

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/divy042000/KoinX-Backend-Task.git
   cd KoinX-Backend-Task
   npm install
   
2. **set up env variables**
    PORT=XXXX
    MONGO_URI=your-mongodb-connection-string
    ETHERSCAN_API_KEY=your-etherscan-api-key
   
4. **Run application**   
    ```bash 
    nodemon server.js
## API Endpoints

### 1. Get transaction list associated with user
- **Endpoint**: `/transactions/:address`
- **Method**: `GET`
- **Description**: Returns the list of transactions for this address.
- **Path Parameters**:
  - `:address` - Ethereum address of the user.
- **Example Request**:

  ```http
  GET http://localhost:4000/transactions/0xYourEthereumAddress
### 2. Get Total Expenses and Current Ether Price
- **Endpoint**: `/transactions/:address`
- **Method**: `GET`
- **Description**: Returns total expenses and current price of ether.
- **Path Parameters**:
  - `:address` - Ethereum address of the user.
- **Example Request**:

  ```http
  GET http://localhost:4000/expenses/0xYourEthereumAddress
## production env API 
### 1. Get transaction list associated with user

    GET https://koinx-assignment-pxit.onrender.com/api/fetch/0xYourEthereumAddress
### 2. Get Total Expenses and Current Ether Price
    GET https://koinx-assignment-pxit.onrender.com/api/expense/0xYourEthereumAddress

  
