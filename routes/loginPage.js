const express = require('express');
const loginPage = express.Router();
const User = require('../models');

loginPage.post('/', async (req, res) => {
    const { name, password } = req.body;
    const [user, created] = await User.findOrCreate({ 
        where: { name: name }, 
        defaults: { name: name, password: password }});
    
    console.log('User data: ', req.params, '\tUser data: ', req.body, '\tUser Id: ', user);
    res.status(200).send(user.id);
});


module.exports = loginPage;