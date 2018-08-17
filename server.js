var express = require('express');
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();
const path = require('path');

app.use("/public", express.static(__dirname + "/public"));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/BC.js");

app.use(routes);


var fs = require('fs');

var partialsDir = __dirname + '/views/partials';

var filenames = fs.readdirSync(partialsDir);

filenames.forEach(function (burger_name) {
  var matches = /^([^.]+).exphbs$/.exec(burger_name);
  if (!matches) {
    return;
  }
  var name = matches[1];
  var template = fs.readFileSync(partialsDir + '/' + burger_name, 'utf8');
  exphbs.registerPartial(name, template);
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
