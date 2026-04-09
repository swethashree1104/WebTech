const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());

// -----------------------------
// MongoDB Connection (FIXED)
// -----------------------------
mongoose.connect('mongodb://127.0.0.1:27017/userDB')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// -----------------------------
// Home Route
// -----------------------------
app.get('/', (req, res) => {
    res.send('MongoDB CRUD API Running');
});

// -----------------------------
// Routes
// -----------------------------
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// -----------------------------
// Start Server
// -----------------------------
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});