let express = require("express");
let router = express.Router();
const Item = require('../models/item.model');

// Image Stuff
// const multer = require('multer');
// const storage = multer.diskStorage({
    // destination: function (req, file, cb) {
      // cb(null, './uploads')
    // },
    // filename: function (req, file, cb) {
      // cb(null, file.originalname)
    // }
// });
// let upload = multer({ storage: storage });

router.post('/', async (req, res) => {

    // console.log(req.file);

    // console.log(req.body);

    // console.log("REQ FILE: " + JSON.stringify(req.file));

    const item = req.body;
    await Item.create(item);

    res.send("YES IT WORKED!!");
});

module.exports = router;