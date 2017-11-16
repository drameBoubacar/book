import express from 'express';  
import mongoose from 'mongoose';
import Book from '../model/book';

const api = express.Router();

api.post('/add', (request, response) => {
    const newBook = new Book(request.body);
    newBook.save((err, book) => {
      if(err){
        return(err)
      }
      res.json({message: 'book saved'})
    });
});

api.get('/', (req, res) => {
    Book.find((err, book) => {
        if(err){
            res.send(err)
        }
        res.json(book)
    })
})

export default api;