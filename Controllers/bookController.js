var bookControllers = function (Book) {
  var post = function (req, res) {
    var book = new Book(req.body);

    if(!req.body.title){
      res.status(400);
      res.send('Title is required')
    }
    else {
      book.save();
      res.status(201);
      res.send(book);
    }
  }

  var get = function (req, res) {
    Book.find(function (err, books) {
      if(err){
        console.log(err)
      }
      else {
        res.json(books)
      }
    })
  }


  return {
    post: post,
    get: get
  }
}

module.exports = bookControllers;