const express = require('express');
const router = express.Router();

//require in our mongoose model
const Book = require('../modules/models/book.schema');

router.get('/', (req, res) => {
    Book.find({

    }).then( (data) =>{
        //we got stuff back from the database (no error)
        console.log('Got stuff back', data);
        res.send(data);
    }).catch((error) => {
        //got an error
        console.log('Error from Mongo:', error);
        res.sendStatus(500); //status for bad stuff happening
    }); 
});

router.post('/', (req, res) => {
    let bookData = req.body;
    console.log('Got the book data from request', bookData);
    //create new instance of book
    let newBook = new Book(bookData);
    console.log('New book is', newBook);
    //save the new book model to database
    newBook.save()
        .then(() => {
            //good servers always respond
            //good stuff happened
            res.sendStatus(201);
        })
        .catch((error) =>{
            //bad stuff happened
            console.log('error adding book', error);
            res.sendStatus(500);
        });   
});

//new delete request

router.delete('/', (req, res) => {
    //delete no use data, we use params
    //data is req.body
    //params is req.query
    Book.findByIdAndRemove(req.query._id)
        .then(() => {
            //good servers respond
            console.log('Removed Book:', req.query._id);
            
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error removing book', error);
            res.sendStatus(500);
        });
});

module.exports = router;