require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
//Connect to the database
mongoose
  .connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
//   (err, db) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("connected to " + process.env.MONGO_URI);
//     }
//   }
// )


// Define a schema
// const Schema = mongoose.Schema;

//Create schema for a person
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
});

//Create model for the person
const Person = mongoose.model("Person", personSchema);

//Create a document and save it to the database
const createAndSavePerson = (done) => {
  const person = new Person({
    name: 'Rana',
    age: 36,
    favoriteFoods: ['Rice', 'Beans', 'Oats'],
  });
  person.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

const createManyPeople =  (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err){
      console.error(err);
    }
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, people) => {
    if (err){
      console.error(err);
    }
    done(null, people);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, person) => {
    if (err){
      console.error(err);
    }
    done(null, person);
  });
};

const findPersonById = (personId, done) => {
  Person.findById({_id: personId}, (err, person) => {
    if (err){
      console.error(err);
    }
    done(null, person);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById({_id: personId}, (err, person) => {
    if (err){
      done(err);
    }
    person.favoriteFoods.push(foodToAdd);
    person.save((err, data) => {  
    if (err){
      console.error(err);
    }
      done(null, data)
  });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, 
    (err, person) => {
      if (err){
        console.error(err)
      }
      done(null, person);
})
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
