//  Modules
const express = require('express');
//  Joi is a class, that's why it follows Pascal Case
const Joi = require('joi');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.use(express.static(path.join(__dirname, '/public')));

let usersAPI = fs.readFileSync('./assets/user-data.json', (err) => {
    if (err)
        return console.log(err);
});
let usersData = JSON.parse(usersAPI);

router.post("/login", (req, res) => {

});

module.exports = router;