import mongoose from 'mongoose';    


const Schema = mongoose.Schema;
let NewBook = new Schema({
    titre: {
        type:String,
         required:true
        },
    auteur: {
        type:String,
         required:true
        },
    année_de_publication: {
        type:Number,
         required:true
        },
    pages: {
        type:Number,
         required:true
        },
    date_de_creation: {
        type:Number,
         required:true
        }
});

export default mongoose.model('Book', NewBook);

