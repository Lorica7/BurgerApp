var mysql = require("mysql");

if (process.env.JAWSDB_URL){
connection = mysql.createConnection(process.env.JAWSDB_URL);

 }  else {
   connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'root',
     database: "burgers_db"
   });
 }

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function(error) {
  if (error) {
    console.error("error connecting: " + error.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});



module.exports = connection;