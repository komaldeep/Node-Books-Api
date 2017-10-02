var express = require('express');

var routes = function (Book) {
  var bookRouter = express.Router();

  bookRouter.route('/Books')
    .post(function (req, res) {
      var book = new Book(req.body);
      // console.log(book);
      book.save();
      res.status(201).send(book)
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

  bookRouter.use('/:bookId', function (req, res, next) {
    Book.findById(req.params.bookId, function (err, book) {
      if(err){
        res.status(500).send(err);
      }
      else if(book){
        req.book = book;
        next();
      }
      else {
        res.status(404).send('no book found');
      }
    })
  })
  bookRouter.route('/:bookId')
    .get(function (req, res) {
      res.json(req.book)
    })
    .put(function (req, res) {
      // console.log(book);
      req.book.title = req.body.title;
      req.book.author= req.body.author;
      req.book.genre= req.body.genre;
      req.book.read= req.body.read;
      // req.book.save();
      req.book.save(function (err) {
        if(err){
          res.status(500).send(err);
        }
        else {
          res.json(req.book)
        }
      })
    })
    .patch(function (req , res) {
      if(req.body._id)
        delete req.body._id
      for(var p in req.body){
        req.book[p] = req.body[p]
      }
      req.book.save(function (err) {
        if(err){
          res.status(500).send(err);
        }
        else {
          res.json(req.book)
        }
      })
    })
  return bookRouter
}

module.exports = routes;
