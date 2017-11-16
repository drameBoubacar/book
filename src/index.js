import express from 'express';
import route from './route';

let app = express();

app.use('/simplonBook', route)

app.listen(3333, () => {
    console.log('server running on port 3333');
})