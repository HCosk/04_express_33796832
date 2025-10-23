// Import the Express library
const express = require("express");

// Create a new Express router object
const router = express.Router();

// Import the built-in 'path' module to work with file paths
const path = require('path');

// Define a route for the home page
router.get("/", (req, res) => res.send("Hello World!"));

// Define a route for the 'About' page
router.get('/about', (req, res) => res.send('<h1>This is about page</h1>'));

// Define a route for the 'Contact' page
router.get('/contact', (req, res) => res.send('<h1>This is contact page</h1>'));

// Define a route that shows the current date and time
router.get('/date', (req, res) => {
  const now = new Date();      // Create a new Date object
  res.send(now.toString());    // Send the current date as a string
});

// Define a parameterized route that welcomes the user by name
router.get('/welcome/:name', (req, res) => {
  const name = req.params.name;                       // Get the 'name' parameter from the URL
  res.send(`<h1>Welcome ${name}</h1>`);               // Send a personalized welcome message
});

// Define a route with two chained handlers using 'next()'
router.get('/chain', 
  (req, res, next) => {
    req.message = 'This message started in the first handler. \n';  // Add a message to the request object
    next();                                           // Pass control to the next handler
  },
  (req, res) => {
    res.send(`<h1>${req.message}Now it continues in the second handler!</h1>`); // Send combined message
  }
);

// Define a route that sends an external HTML file
router.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, '../a.html'));    // Send the 'a.html' file located one folder up
});

// Export the router object so it can be used in index.js
module.exports = router;