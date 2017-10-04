var should = require('should'),
    sinon = require('sinon');

describe('Book controller Tests:', function () {
  describe('Post', function () {
    it('should not allow an empty title on post', function () {
      var Book = function (book){ this.save = function () { }};
      var req = {
        body:{
          author: 'king of the world'
        }
      };
      var res = {
        status: sinon.spy(),
        send: sinon.spy()
      };

      var bookController = require('../Controllers/bookController')(Book);

      bookController.post(req, res);

      res.status.calledWith(400).should.equal(true, 'Bad status ' + res.status);
      res.send.calledWith('Title is required').should.equal(true);
    })
  })
})