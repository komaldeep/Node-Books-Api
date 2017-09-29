var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./Models/bookModel')
var app = express();

var port = process.env.PORT || 8000;

var bookRouter = express.Router();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

bookRouter.route('/Books')
  .post(function (req, res) {
    var book = new Book(req.body);

    console.log(book)
    res.send(book)
  })
  .get(function (req,res) {

    // var query = { }
    // if(req.query.genre){
    //   query.genre = req.query.genre;
    // }
    //
    // Book.find(query, function (err, books) {
    //   if(err){
    //     // res.status(500).send(err)
    //     console.log(err)
    //   }
    //   else {
    //     res.json(books)
    //   }
    // })

    Book.find(function (err, books) {
      if(err){
        // res.status(500).send(err)
        console.log(err)
      }
      else {
        res.json(books)
      }
    })
  });

app.use('/api', bookRouter)

app.get('/', function (req, res) {
  res.send(('Welcome to my API'));
});

app.listen(port, function () {
  console.log('Running on port' + port);
});
