// Import Express
const express = require('express');

// Create app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Home route (Fix for "Cannot GET /")
app.get('/', (req, res) => {
    res.send('Welcome to REST API Server');
});

// Import routes
const userRoutes = require('./routes/users');

// Use routes
app.use('/users', userRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});