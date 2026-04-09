// Import Express
const express = require('express');

// Create app
const app = express();

// -----------------------------
// Global Middleware (app-level)
// -----------------------------
app.use((req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`[GLOBAL] ${req.method} ${req.url} - ${time}`);
    next(); // Pass control to next middleware
});

// -----------------------------
// Middleware Layer 1
// -----------------------------
app.use((req, res, next) => {
    console.log("Middleware 1 executed");
    next();
});

// -----------------------------
// Middleware Layer 2
// -----------------------------
app.use((req, res, next) => {
    console.log("Middleware 2 executed");
    next();
});

// -----------------------------
// Route-level Middleware
// -----------------------------
const routeMiddleware = (req, res, next) => {
    console.log("Route-level middleware executed");
    next();
};

// -----------------------------
// Routes
// -----------------------------

// Home route
app.get('/', (req, res) => {
    res.send('Home Page - Middleware Demo');
});

// Route with route-level middleware
app.get('/about', routeMiddleware, (req, res) => {
    res.send('About Page with Route Middleware');
});

// Another route
app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

// -----------------------------
// Start Server
// -----------------------------
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});