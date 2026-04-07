const express= require ('express');
const app= express();

// const userModel = require('./usermodel')

// Middleware to parse JSON
app.use(express.json());

// Import the userRoutes
const userRoutes = require('./userRoutes'); 


// Use the user routes for any /users endpoint
app.use('/users', userRoutes);


app.listen(3000);
