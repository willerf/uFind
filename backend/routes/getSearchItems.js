let express = require("express");

let router = express.Router();

router.get('/', (req, res) => {
    res.send([
        'Wallet',
        'Watcard',
        'Sunglasses',
    ])
});

module.exports = router;