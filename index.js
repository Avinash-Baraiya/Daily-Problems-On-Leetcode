const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module
const leet = require('./leetcode'); // Import the leet module

const app = express();

app.use(cors({
    origin: '*' // Update this to specific origins in production
}));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'index.html'));
});

app.get('/:id', leet.leetcode);

app.listen(3000, () => {
    console.log('App is running on port 3000');
});
