import express from 'express';
const app = express();
const PORT = 8080;

// Middleware to parse JSON data in request body
app.use(express.json());

// Route to retrieve data
app.get('/fetch', (req, res) => {
  res.send('You have entered the /fetch route');
});

// Route to save/write data
app.post('/save', (req, res) => {
  res.send('You have entered the /save route');
});

// Route to delete data
app.delete('/delete', (req, res) => {
  res.send('You have entered the /delete route');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
