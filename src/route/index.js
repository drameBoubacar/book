import express from 'express';  
import mongoose from 'mongoose';
import Book from '../model/book';

const api = express.Router();

api.post('/add', (request, response) => {
    const newFilm = new Film(request.body);
    newFilm.save((err, film) => {
      if(err) return console.log(err);
    });
});

export default api;