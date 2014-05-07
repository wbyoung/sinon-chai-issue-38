/* jshint expr: true */
/* global before, after */

'use strict';

var app = require('../app');
var util = require('util');
var request = require('request');
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
chai.use(require('sinon-chai'));

var server;
var port = 383273;
var baseURL = util.format('http://localhost:%d', port);

describe('routing', function() {
  // install spies before creating the app and starting the server
  before(function() { sinon.spy(app.routes, 'index'); });
  after(function() { app.routes.index.restore(); });

  // create the app and start the server
  before(function(done) { server = app.create().listen(port, done); });
  after(function(done) { server.close(done); });

  describe('GET /', function() {
    it('calls index route', function(done) {
      request.get(baseURL + '/', function(err, res, data) {
        expect(app.routes.index).to.have.been.calledOnce;
        expect(app.routes.index.getCall(0).args[0].params).to.eql({});
        done();
      });
    });
  });
});
