
var orm = require("../config/orm.js");

var burgers = {
  all: function (callback) {
    orm.selectAll("burgers", function (response) {
      callback(response);
    });
  },

  insertOne: function (cols, vals, callback) {
    orm.insertOne(cols, vals, function (response) {
      callback(response);
    });
  },
  updateOne: function (objColVals, condition, callback) {
    orm.updateOne( objColVals, condition, function (response) {
      callback(response);
    });
  },

};

module.exports = burgers;
