var random = require("./random");
function sex() {
    var userSex = random(0,1);
    if(userSex == 1){
        userSex = "male";
    }else{
        userSex = "female";
    }
    return userSex;
}
module.exports = sex;