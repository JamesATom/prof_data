const express = require('express');
const homePage = express.Router();

homePage.get('/', (req, res) => {
    res.send("What's up!");
});


module.exports = homePage;