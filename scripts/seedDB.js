const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/addressBook"
);

const contactSeed = [
  {
      firstName: "Ryan",
      lastName: "Goderis",
      email: "rgoderis789@gmail.com",
      phoneNumber: "4075756164",
      birthDay: "8",
      birthMonth: "August",
      address: "3212 Decker Ave.,",
      city: "Orlando",
      state: "FL",
      zip: "32833"
  }
];

db.Contact
  .remove({})
  .then(() => db.Contact.collection.insertMany(contactSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
