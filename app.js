var express = require('express');

var app = express();

var port = process.env.PORT || 8000;

var bookRouter = express.Router();

bookRouter.route('/Books')
  .get(function (req,res) {
    var responseJson = {hello: 'this is my api'};
    res.json(responseJson);
  });

app.use('/api', bookRouter)

app.get('/', function (req, res) {
  res.send(('Welcome to my API'));
});

app.listen(port, function () {
  console.log('Running on port' + port);
});
