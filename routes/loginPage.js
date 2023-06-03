const express = require('express');
const loginPage = express.Router();

loginPage.post('/', (req, res) => {
    console.log('User data: ', req.params, '\tUser data: ', req.body);
    res.status(200).send('success');
});


module.exports = loginPage;