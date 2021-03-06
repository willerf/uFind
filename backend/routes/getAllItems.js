let express = require("express");

let router = express.Router();

const Item = require('../models/item.model');

router.get('/', async (req, res) => {
    const allItems = await Item.find();
    res.send(allItems);
});

module.exports = router;