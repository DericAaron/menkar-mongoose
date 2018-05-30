
//requires
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//uses
app.use(bodyParser.urlencoded({extended: true}));

//require in our mongoose model
const Book = require('./modules/models/book.schema');


////-------------------------------NEW-------------
//connect to database, Mongo DB
const mongoose = require('mongoose');

const DATABASE_NAME = 'library';
const DATABASE_URL = `mongodb://localhost:27017/${DATABASE_NAME}`;
mongoose.connect(DATABASE_URL);

//function to log when connected to database
mongoose.connection.on('connected', () => {
    console.log(`Mongoose is connected to ${DATABASE_URL}`);
});

mongoose.connection.on('error', (error) =>{
    console.log(`Mongoose Connection error: ${error}`);
});

///---------------END NEW--------------------

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server listening on', PORT);
});
