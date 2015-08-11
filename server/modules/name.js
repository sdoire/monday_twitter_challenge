var random = require("./random");

function name () {
    var first = ["Corina", "Cena", "Maria", "Matt", "Huck", "Cat", "Paul", "Bob", "Sam", "Luke", "Sarah", "Suren", "Tara", "Josh", "Jim", "Ryan", "Lisa", "Brandon", "Skyler", "Eric", "Mikel", "James"];
    var last = ["Mayo", "Doire", "White", "Keck", "Newberry", "Daniels", "De Grote", "Bankston", "Brunt", "Negen", "Brock", "Stommes", "Severson", "Vijayakumar", "Johnson", "Larson", "Coury", "Fix", "Bernstein",  "Stafki", "Sunders", "Peters"];


    var firstName = first[random(0, first.length -1)];
    var lastName = last[random(0, last.length -1)];

    return firstName + ' ' + lastName;
}


module.exports = name;