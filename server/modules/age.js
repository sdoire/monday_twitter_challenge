var random = require("./random");

function age(){
    return random(0, 99);
}

module.exports = age;