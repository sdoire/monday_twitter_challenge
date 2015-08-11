var random = require("./random");
var userTwitter = ["@Westeros", "@Winterfell", "@theWall", "@Cersei'sAb!tch", "@F#&$Joffrey", "@youknowNOTHINGJonSnow", "@WinterisComing", "@MotherOfDragons", "@LittleFinger", "@TheImp"];

var twitter = function(){
    return userTwitter[random(0,userTwitter.length -1)];
};

module.exports = twitter;