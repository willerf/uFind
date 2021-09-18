let express = require("express");

let router = express.Router();

const Item = require('../models/item.model');

router.post('/', async (req, res) => {
    const item = req.body;
    await Item.create(item);
    res.status(200);
});

module.exports = router;