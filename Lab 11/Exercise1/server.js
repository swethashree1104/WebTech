// Import required module using require()
const http = require('http');

// Define port number
const PORT = 3000;

// Create server using createServer()
const server = http.createServer((req, res) => {
    
    // Log request details
    console.log(`Request received: ${req.method} ${req.url}`);

    // Set response header
    res.setHeader('Content-Type', 'text/html');

    // Handle different routes
    if (req.url === '/') {
        res.write('<h1>Welcome to Node.js Server</h1>');
        res.write('<p>This is the home page</p>');
    } 
    else if (req.url === '/about') {
        res.write('<h1>About Page</h1>');
        res.write('<p>This is the about page</p>');
    } 
    else {
        res.write('<h1>404 Not Found</h1>');
    }

    // End response
    res.end();
});

// Run server using listen()
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});