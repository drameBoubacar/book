import express from 'express';
import route from './route';
import mongoose from 'mongoose';


let app = express();


mongoose.connect('mongodb://localhost:27017/book', () => {
    console.log('DB initialized ...');
})

app.use(express.urlencoded({ extended : true }))
app.use('/simplonBook', route)

app.listen(3333, () => {
    console.log('server running on port 3333');
})