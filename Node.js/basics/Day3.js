// Import dependencies
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample GET route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Sample POST route
app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  console.log('Received:', receivedData);
  res.json({ message: 'Data received!', data: receivedData });
});

// Sample dynamic route
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
