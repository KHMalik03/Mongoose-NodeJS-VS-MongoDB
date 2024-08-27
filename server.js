
const mongoose = require('mongoose');
const Person = require('./models/Person');

const mongoURI = 'mongodb://localhost:27017/';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const createAndSavePerson = () => {

    const person = new Person({
        name: 'Hmed Hamid',
        age: 2030,
        favoriteFoods: ['Chtit7a', 'Grantita'],
    });

    person.save((err, data) => {
        if (err) {
            console.error('Error saving person:', err);
        } else {
            console.log('Person saved successfully:', data);
        }

    });
};

const createManyPeople = () => {

    const arrayOfPeople = [
        { name: 'Alice', age: 25, favoriteFoods: ['Burritos', 'Pasta'] },
        { name: 'Alice', age: 28, favoriteFoods: ['Steak', 'Salad'] },
        { name: 'Charlie', age: 32, favoriteFoods: ['Tacos', 'Burritos'] },
    ];

    Person.create(arrayOfPeople);
};

const findPeopleByName = () => {
    Person.find({ name: "Alice" })
};

const findPersonByName = () => {
    Person.findOne({ age: 2030 })
};

const findPersonById = () => {
    const id = "Write the id you want to search"
    const personFound = Person.findById(id)

    personFound.favoriteFoods.push('Pizza')
};

const findPersonAndUpdate = () => {
    Person.findOneAndUpdate({ name: 'Charlie' }, { age: '56' })
};

const findPersonRemove = () => {
    const id = 'Write the id of the person you want to delete '
    Person.findByIdAndRemove(id)
}

const findPeopleRemove = () => {
    Person.remove({ name: 'Alice' })
}

const queryChain = () => {
    Person.find({ favoriteFoods: 'burritos' })
        .sort({ name: 1 })
        .limit(2)
        .select('-age')
        .exec((err, data) => {
            if (err) {
                console.error('Error performing query chain:', err);
            }

        }
        )
}
