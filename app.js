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

bookRouter = require('./Routes/bookRoutes')(Book);

app.use('/api', bookRouter);

app.get('/', function (req, res) {
  res.send(('Welcome to my API'));
});

app.listen(port, function () {
  console.log('Running on port' + port);
});
