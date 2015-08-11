var express = require('express');
var router = express.Router();
var path = require('path');
var User = require('../models/user');
var createUser = require('../modules/createUser');
var mongoose = require('mongoose');
//var genTeam = require('../modules/genTeam');
var userArray = [];


router.get('/', function(req, res){
    for (var i=1; i<=20; i++){
       var newUser = new createUser();
       console.log(newUser);
       User.create(newUser, function(err, post){
           res.send("Yes");
       });
       userArray.push(newUser);
   }
    res.send(userArray);
});

router.delete("/:id", function(req, res, next){
    User.findByIdAndRemove(req.params.id, req.body, function(err, post){
        //if(err){
        //    console.log("ERROR!! : ", err);
        //}
        res.json(post);
        //res.json({});
    });
    console.log(req.params.id);
});
// /:num will be used to create user in genTeam
//router.get("/:num", function(req, res){
//    var numUsers = parseInt (req.params.num);
//    console.log(numUsers);
//    var team = genTeam(numUsers);
//    //TODO: Team is being sent before the mongoose callback can populate the array.
//    //SEE GENTEAM.JS
//    console.log(team);
//    res.send(team);
//});

module.exports = router;