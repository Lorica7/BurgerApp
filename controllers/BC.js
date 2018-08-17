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
  burgers.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
  console.log(result);
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
  
    } else {
      res.status(200).end();
    }
  });
});



module.exports = router;
