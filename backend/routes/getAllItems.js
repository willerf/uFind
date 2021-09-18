let express = require("express");

let router = express.Router();

const Item = require('../models/item.model');

router.get('/', async (req, res) => {
    const allItems = await Item.find();
 

    console.log({allItems});

    // res.status(200).json(allItems);
    res.send('Hi')
});

module.exports = router;