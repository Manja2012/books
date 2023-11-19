import  {Schema, model} from 'mongoose';

const bookSchema = new Schema({
    titre: {
    type: String,
    required: true,
  }, 
  sous_titre: {
    type: String,
    required: true,
  },
  auteur: {
    type: String,
    required: true,
  } ,
  date: {
    type: Number,
    required: true,
  } ,
  description: {
    type: String,
    required: true,
  },
})

const Book = model('books', bookSchema);

export default Book;