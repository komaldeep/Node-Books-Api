var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./Models/bookModel')
var app = express();

var port = process.env.PORT || 8000;

var bookRouter = express.Router();

bookRouter.route('/Books')
  .get(function (req,res) {
    //vvar responseJson = {hello: 'this is my api'};
    Book.find(function (err, books) {
      if(err){
        console.log(err)
      }
      else {
        res.json(books)
      }
    })
    res.json(responseJson);
  });

app.use('/api', bookRouter)

app.get('/', function (req, res) {
  res.send(('Welcome to my API'));
});

app.listen(port, function () {
  console.log('Running on port' + port);
});
