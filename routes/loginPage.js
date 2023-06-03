const express = require('express');
const loginPage = express.Router();

loginPage.post('/', (req, res) => {
    console.log('User data: ', req);
});


module.exports = loginPage;