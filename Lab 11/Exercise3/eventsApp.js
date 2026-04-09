// Import events module using require()
const EventEmitter = require('events');

// Create an EventEmitter instance
const emitter = new EventEmitter();

// -----------------------------
// Register Event Listeners
// -----------------------------

// Listener 1 for 'userLogin'
emitter.on('userLogin', (username) => {
    console.log(`User ${username} has logged in.`);
});

// Listener 2 for same 'userLogin' event
emitter.on('userLogin', (username) => {
    console.log(`Welcome, ${username}! Enjoy your session.`);
});

// Listener for 'orderPlaced'
emitter.on('orderPlaced', (orderId, product) => {
    console.log(`Order ID: ${orderId} | Product: ${product}`);
});

// Listener for 'errorEvent'
emitter.on('errorEvent', (errMsg) => {
    console.log(`Error occurred: ${errMsg}`);
});

// -----------------------------
// Trigger Events using emit()
// -----------------------------

console.log("Triggering userLogin event...");
emitter.emit('userLogin', 'Swetha');

console.log("\nTriggering orderPlaced event...");
emitter.emit('orderPlaced', 101, 'Laptop');

// -----------------------------
// Asynchronous Event Trigger
// -----------------------------

setTimeout(() => {
    console.log("\nTriggering userLogin asynchronously...");
    emitter.emit('userLogin', 'AsyncUser');
}, 2000);

// -----------------------------
// Trigger error event
// -----------------------------

emitter.emit('errorEvent', 'Invalid operation detected');