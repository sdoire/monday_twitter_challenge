// this module is for using the user-factory to write the correct number of users to the DB.

var createUser = require('./createUser');

var genTeam = function(numMembers){
    var team = [];
    for (var i = 0; i < numMembers ; i++){
        var user = createUser();
        user.save(function(err, user){
            team.push(user);
        });
    }
    //We are returning the team BEFORE the .save callback can populate it. That's why the arrays are
    //empty scott is making me stop sorry
    return team;
};

module.exports = genTeam;