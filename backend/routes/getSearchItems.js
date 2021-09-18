let express = require("express");

let router = express.Router();

const Item = require('../models/item.model');

router.post('/', async (req, res) => {
    const allItems = await Item.find();

    console.log(req.body);

    const searchTerm = req.body.search;
    const tokens = searchTerm.split(' ').map(token => token.toLowerCase());

    const filteredItems = allItems.filter(item => {
        let match = false;
        tokens.forEach(token => {
            const descriptionMatch = item.description.toLowerCase().includes(token);
            if (descriptionMatch) {
                match = true;
            }
        });
        return match;
    });

    res.send(filteredItems);
});

module.exports = router;