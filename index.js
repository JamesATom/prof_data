const express = require('express');
const cors = require('cors');
const app = express();

const router = require('./routes/routes');

app.use(express.json());
app.use(cors());
app.use('/user', router)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('Listening on Port');
});