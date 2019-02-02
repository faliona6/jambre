const express = require('express');
const Joi = require('joi');
const path = require('path');
const fs = require('fs');

// const login = require('./routes/login')
const app = express();
app.use(express.static(path.join(__dirname, '/client/jam-it/dist/jam-it')));

app.use('/login', express.static(path.join(__dirname, '/client/jam-it/dist/jam-it')));
// app.use('/', login);

app.use('/register', express.static(path.join(__dirname, '/client/jam-it/dist/jam-it')));
// app.use('/', register);

app.use('/home', express.static(path.join(__dirname, '/client/jam-it/dist/jam-it')));
// app.use('/', home);

const port = process.env.PORT || 8010

app.listen(port, () => console.log(`Listening on port ${port}...`));