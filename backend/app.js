const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const PORT = 3001;

const bodyParser = require('body-parser');

const getAllItems = require('./routes/getAllItems');
const getSearchItems = require('./routes/getSearchItems');
const newItem = require('./routes/newItem');
const newPerson = require('./routes/newPerson');

mongoose.connect('mongodb+srv://rosscleary:RossClearyPassword@cluster0.1o5cg.mongodb.net/uFind?retryWrites=true&w=majority');
const connection  = mongoose.connection;

connection.once('open', function () {
    console.log('Connected to database');
});

app.use(cors());
app.use(bodyParser.json());

// GET list of all items
app.use('/getAllItems', getAllItems);

// POST a new item
app.use('/newItem', newItem);

// GET list of relevant items for a search term
app.use('/getSearchItems', getSearchItems);

app.use('/newPerson', newPerson);

app.listen(PORT, function () {
    console.log(`Server is running on port: ${PORT}`);
});
