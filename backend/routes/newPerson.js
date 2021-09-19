let express = require("express");

let router = express.Router();

const Person = require('../models/person.model');

router.post('/', async (req, res) => {
    const person = req.body;
    await Person.create(person);
    res.send('YES IT WORKED!!');
});

module.exports = router;