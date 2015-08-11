var mongoose = require("mongoose");

var UsersSchema = new mongoose.Schema({
    name : String,
    age : Number,
    sex : String,
    location : String,
    twitter : String
});

module.exports = mongoose.model("users", UsersSchema);