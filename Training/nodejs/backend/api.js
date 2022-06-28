const express = require("express");
const app = express();
const port = 8000;
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "newdb",
});

con.connect(function (err) {
  if (err) console.log(err);
});

app.get("/login", function (req, res) {
  con.query("SELECT * FROM tblusers", function (err, result) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(result);

      res.send(result);
    }
  });
});

app.get("/signup", function (req, res) {
  res.send("signup api");
});

app.listen(port, function () {
  console.log("Server is running");
});
