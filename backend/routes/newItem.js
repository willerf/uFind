let express = require("express");
const multer = require('multer');

let router = express.Router();

const Item = require('../models/item.model');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

router.post('/', async (req, res) => {
    const item = req.body;
    await Item.create(item);
    res.send("YES IT WORKED!!");
});

module.exports = router;