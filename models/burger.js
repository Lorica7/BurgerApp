
var orm = require("../config/orm.js");

var burgers = {
  all: function(callback) {
    orm.all("burgers", function(response) {
      callback(response);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, callback) {
    orm.create("burgers", cols, vals, function(response) {
      callback(response);
    });
  },
  update: function(objColVals, condition, callback) {
    orm.update("burgers", objColVals, condition, function(response) {
      callback(response);
    });
  },
  delete: function(condition, callback) {
    orm.delete("burgers", condition, function(response) {
      callback(response);
    });
  }
};

module.exports = burgers;
