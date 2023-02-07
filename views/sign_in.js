var mysql = require('mysql');
var url = require("url");
const express = require('express');
var bodyParser = require('body-parser')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "userdb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE USERDB", function(err, result) {
        if (err) throw err;
        console.log("database created");
    });
});

const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/sign_in.html');
});

con.connect(function(err) {
    if (err) throw err;
    console.log("connected");
    var sql = "CREATE TABLE user (name VARCHAR(255), )"
});