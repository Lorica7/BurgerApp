
var orm = require("../config/orm.js");

var burgers = {
  all: function (callback) {
    orm.selectAll("burgers", function (response) {
      callback(response);
    });
  },

  insertOne: function (cols, vals, callback) {
    orm.create("burgers", cols, vals, function (response) {
      callback(response);
    });
  },
  updateOne: function (objColVals, condition, callback) {
    orm.update("burgers", objColVals, condition, function (response) {
      callback(response);
    });
  },

};

module.exports = burgers;
