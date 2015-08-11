var random = require("./random");

var userLocation = ["Dubai", "Abu Dhabi", "Tokyo", "Algeria", "Westeros", "Hogwarts", "Mars", "Rio De Janiero", "Narnia"];

var location = function(){
    return userLocation[random(0,userLocation.length -1)];
};
module.exports = location;

