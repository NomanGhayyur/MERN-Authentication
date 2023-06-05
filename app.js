const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

app.listen(3001, () => {
    console.log('Server listening on port 3001');
})