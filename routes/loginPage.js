const express = require('express');
const loginPage = express.Router();

loginPage.post('/', (req, res) => {
    res.send("What's up!");
});


module.exports = loginPage;