//  Modules
const express = require('express');
//  Joi is a class, that's why it follows Pascal Case
const Joi = require('joi');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.use(express.static(path.join(__dirname, '/public')));

let usersAPI = fs.readFileSync('./client/src/assets/usersProfile.json', (err) => {
    if (err)
        return console.log(err);
});
let usersData = JSON.parse(usersAPI);

router.post("/register", (req, res) => {
    const { error } = validateUser(req.body); // equivalent to result.error; object destructuring.
    if (error)
        return res.status(400).send(error.details[0].message);
    
    const user = {
        name: req.body.name,
        age: req.body.age
    };
});

function validateUser(user) {
    const schema = {
        // telling Joi that this must be a string, alphanumeric characters, min of 3 characters, max of 30 characters, and is required.
        name: Joi.string().min(3).max(30).required(),
        age: Joi.number().integer().min(18).required()
    };
    // .validate returns an object.
    return Joi.validate(user, schema);
}

module.exports = router;