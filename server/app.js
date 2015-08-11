var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();

var users = require("./routes/users");
var index = require("./routes/index.js");

var mongoURI = "mongodb://localhost:27017/repo_switch_green";
var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error', function(err){
    if(err){
        console.log("MONGO ERROR: ", err);
    }
});

mongoDB.once('open', function(){
    console.log("YOU ARE CONNECTED TO MONGO!!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

app.set("port", (process.env.PORT || 5000));

app.use("/users", users);
app.use("/", index);

app.listen(app.get("port"), function(){
    console.log("listening on port: " + app.get("port"));
});