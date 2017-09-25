var mongoose = require('mongoose'),
    MongoClient = require('mongodb').MongoClient,
    Schema = mongoose.Schema();

// mongoose.connect('mongodb://localhost/my_database');
mongoose.connect('mongodb://localhost/myapp');

// var MongoClient = require('mongodb').MongoClient;
// // Connect to the db
// MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
//
//   if(err) throw err;
//
//   //Write databse Insert/Update/Query code here..
//
// });
// mongoose.connect('mongodb://localhost/myapp');

var bookModel = mongoose.Schema({
  title:{ type: String },
  author:{ type: String },
  genre: { type: String },
  read: { type: Boolean, default: false }
});

module.exports = mongoose.model('Book', bookModel);
