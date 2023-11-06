var express = require("express");
var mysql = require("mysql");
var cors = require("cors");


var app = express();
app.use(express.json());
app.use(cors());


var con = mysql.createConnection({
  host: "localhost",
  user: "johan",
  password: "valerius",
  database: "sakila"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
