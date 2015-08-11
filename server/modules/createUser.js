var age = require('./age');
var sex = require('./sex');
var name = require('./name');
var twitter = require('./twitter');
var location = require('./location');
var User = require('../models/user');

function createUser(){
    var person = new User({
        name: name(),
        age: age(),
        sex: sex(),
        twitter: twitter(),
        location: location()
    });
    return person;
}



module.exports = createUser;