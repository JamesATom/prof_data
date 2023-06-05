const express = require('express');
const loginPage = express.Router();
const { User } = require('../models');

loginPage.post('/', async (req, res) => {
    const { name, password } = req.body;

    const [user, created] = await User.findOrCreate({ 
        where: { name: name }, 
        defaults: { name: name, password: password }});

    res.send({ id: user.id });
});


module.exports = loginPage;