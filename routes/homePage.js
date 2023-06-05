const express = require('express');
const homePage = express.Router();
const userObjectArray = require('../src/userObject');

homePage.get('/', (req, res) => {
    // console.log('User Ojbect', userObjectArrray);
    res.send(userObjectArray)
});

// homePage.get('/')

module.exports = homePage;