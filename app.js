'use strict';

var express = require('express');

var routes = exports.routes = {
  index: function(req, res) {
    res.json({});
  }
};

var create = exports.create = function() {
  var app = express();
  app.get('/', routes.index);
  return app;
};

if (require.main === module) {
  var env = process.env.NODE_ENV || 'development';
  var port = process.env.PORT || 3000;
  create().listen(port, function() {
    console.log('Express server started on port %s', port);
  });
}
