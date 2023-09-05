const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');
const {errorHandler} = require('./middleware/errorMiddleware');

connectDB();

const app = express();

// Middleware

//This middleware is used to parse the request body as JSON
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//use goalRoutes to handle any endpoints that end with /api/goals
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Serve frontend build files in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => 
    res.sendFile(path.resolve(__dirname, '../', 'frontend', 'dist', 'index.html')
    )
  )
 
} else {
  app.get('/', (req, res) => {
    res.send('Please set to production mode');
  })
}

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});