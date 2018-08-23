var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function(request, response) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    response.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log(req.body);
  burgers.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result) {
 
  res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
console.log(req.body);
  burgers.updateOne({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
  
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
