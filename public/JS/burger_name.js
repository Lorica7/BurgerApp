
var express = require("express");

var router = express.Router();

var burgers = require("../../models/burger.js");

var $ =require(jquery);



$( document ).ready(function() {
  console.log( "ready!" );
  $( window ).on( "load", function() {
    router.get("/", function(request, response) {
      burgers.all(function(data) {
        var hbsObject = {
          burgers: data
        };
        console.log(hbsObject);
        response.render("index", hbsObject);
      });
    });
});





$(function () {
  $(".change-eaten").on("click", function (event) {
    var id = $(this).data("id");
    // var eaten = $(this).data("eaten");
    var newState = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function () {
        console.log("changed to", newState);

        location.reload();
        burgers.updateOne();
      }
    );
  });
});


$ (function () {
  $(".button").on("click", function (event) {

    event.preventDefault();

    var newBurger = {
      name: $("#new-burger").val().trim(),
        devoured: false
    };


    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");

        location.reload();
        burgers.insertOne();
      }
    );
  });
});
});
