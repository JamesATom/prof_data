const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./models');
const homePage = require('./routes/homePage');
const loginPage = require('./routes/loginPage');

app.use(express.json());
app.use(cors());
app.use('/home', homePage);
app.use('/login', loginPage);

const PORT = 3000;

// db.sequelize.drop();

db.sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on Port: ${PORT}`);
    });
});