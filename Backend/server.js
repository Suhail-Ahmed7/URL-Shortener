const express = require('express')
const connectDB = require('./config/dbConnection')
const dotenv = require('dotenv');

dotenv.config();
connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});