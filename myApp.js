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
    },
    (err, db) => {
      if (err) {
        console.log(err);
      } else {
        console.log("connected to " + process.env.MONGO_URI);
      }
    }
  )
  // .then(() => {
  //   console.log(`Mongo db connected`);
  // });

// Define a schema
const Schema = mongoose.Schema;

//Create schema for a person
const personSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favouriteFoods: [String],
});

//Create model for the person
const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = () => {
  const programmer = new Person({
    name: "Rana",
    age: 30,
    favouriteFoods: ["pizza", "pasta"],
  });
  programmer.save((err, data) => {
    if (err) {
      return done(err);
    } else {
      console.log(data)
      // done(null, data)};
  }})};

createAndSavePerson();
const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};
``;
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
