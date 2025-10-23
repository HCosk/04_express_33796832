## Installation and Setup

1. Clone or copy this project.
2. Open the project folder in your terminal.
3. Run the following commands:

npm install

node index.js

4. Open your browser and go to:

http://localhost:8000

## Implemented Routes

### 1. /welcome/:name
Displays a personalized welcome message using a parameterized route.

Example:
http://localhost:8000/welcome/Ronald

Output:
Welcome Ronald

### 2. /chain
Demonstrates route chaining using the next() function.

Example code:
```javascript
router.get('/chain', 
  (req, res, next) => {
    req.message = 'First handler ran. ';
    next();
  },
  (req, res) => {
    res.send(req.message + 'Then the second handler completed the response.');
  }
);