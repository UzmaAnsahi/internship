const express = require('express');
const app = express();
const port = 3000;

// For simplicity, using an in-memory array to store quotes
const quotes = [
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    // Add more quotes as needed
];

app.use(express.static('public'));

app.get('/api/quotes', (req, res) => {
    res.json(quotes);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
