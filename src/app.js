const fs = require('fs');
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Load movie data from JSON file

// GET /movies/range
app.get('/movies/range', (req, res) => {
    // Complete the code
});

module.exports = app;
