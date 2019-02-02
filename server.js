const express = require('express');
const Joi = require('joi');
const path = require('path');
const fs = require('fs');

// const login = require('./routes/login')
const app = express();

app.use(express.static(path.join(__dirname, '/client/dist/jam-it')));
app.use(express.static(path.join(__dirname, '/client/src')));


app.use('/login', express.static(path.join(__dirname, '/client/dist/jam-it')));
app.use('/register', express.static(path.join(__dirname, '/client/dist/jam-it')));
app.use('/home', express.static(path.join(__dirname, '/client/dist/jam-it')));
app.use('/findbands', express.static(path.join(__dirname, '/client/dist/jam-it')));
app.use('/profile', express.static(path.join(__dirname, '/client/dist/jam-it')));

const port = process.env.PORT || 8010

app.listen(port, () => console.log(`Listening on port ${port}...`));
