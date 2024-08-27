const mongoose = require('mongoose');

const Person = mongoose.model('Person',{
    name : String,
    age : Number,
    favoriteFoods: [String]
});

module.exports = Person