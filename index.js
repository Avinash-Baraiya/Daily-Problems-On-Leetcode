const express = require('express');
const cors = require('cors');
const leet = require('./leetcode'); // Import the leet module

const app = express();

app.use(cors({
    origin: '*' // Update this to specific origins in production
}));

app.get('/', (req, res) => {
    res.send(`<b>API URL:</b>/<b style="color:crimson;">yourLeetcodeUsername</b>`);
});

app.get('/:id', leet.leetcode);

app.listen(3000, () => {
    console.log('App is running on port 3000');
});
