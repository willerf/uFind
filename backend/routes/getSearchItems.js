let express = require("express");

let router = express.Router();

const Item = require('../models/item.model');

router.get('/', async (req, res) => {
    const allItems = await Item.find();

    const searchTerm = req.body.search;
    const tokens = searchTerm.split(' ').map(token => token.toLowerCase());

    const filteredItems = allItems.filter(item => {
        let match = false;
        tokens.forEach(token => {
            const titleMatch = item.title.toLowerCase().includes(token);
            const descriptionMatch = item.description.toLowerCase().includes(token);
            if (titleMatch || descriptionMatch) {
                match = true;
            }
        });
        return match;
    });

    res.send(filteredItems);
});

module.exports = router;