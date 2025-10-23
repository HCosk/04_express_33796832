// Create a new router
const express = require("express");
const router = express.Router();
const path = require('path');

// Handle the main routes
router.get("/", (req, res) => res.send("Hello World!")); 
router.get('/about', (req, res) => res.send ('<h1>This is about page</h1>'))
router.get('/contact', (req, res) => res.send ('<h1>This is contact page</h1>'))
router.get('/date', (req, res) => {const now = new Date();res.send(now.toString());})
router.get('/welcome/:name', (req, res) => {const name = req.params.name;res.send(`<h1>Welcome ${name}</h1>`);});
router.get('/chain', 
  (req, res, next) => {
    console.log('First handler');
    req.message = 'This message started in the first handler. /n';
    next(); // Pass control to the next handler
  },
  (req, res) => {
    console.log('Second handler');
    res.send(`<h1>${req.message}Now it continues in the second handler!</h1>`);
  }
);
router.get('/file', (req, res) => {res.sendFile(path.join(__dirname, '../a.html'));});
// Export the router object so index.js can access it
module.exports = router;
