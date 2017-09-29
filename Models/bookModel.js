var mongoose = require('mongoose'),
    Schema = mongoose.Schema();

mongoose.connect('mongodb://localhost:27017/booksAPI');

var bookModel = mongoose.Schema({
  title: { type: String },
  author: { type: String },
  genre: { type: String },
  read: { type: Boolean, default: false }
});

module.exports = mongoose.model('Book', bookModel);
