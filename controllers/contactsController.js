const db = require("../models");

// Defining methods for the contactController
module.exports = {
  findAll: function(req, res) {
    db.Contact
      .find(req.query)
      .sort({ lastName: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Contact
      .findById(req.params.id)
      .populate("notes")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Contact
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .then(res=>res.redirect("/"))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Contact
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Contact
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addNote: function(req, res){
    db.Note
      .create(req.body)
      .then(function(dbNote){
        return db.Contact.findOneAndUpdate({_id: req.params.id}, {$push: {notes: dbNote._id}})
      })
      .then(dbModel => res.json(dbModel))
      .catch(err=>res.status(422).json(err))
  },
  deleteNote: function(req, res){
    db.Note
      .findOneAndDelete({_id: req.params.noteId})
      .then(function(dbNote){
        return db.Contact.findOneAndUpdate({_id: req.params.contactId}, {$pull: {notes: dbNote._id}})
      })
      .then(dbModel=> res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  searchContacts: function(req, res){
    let option = req.params.option;
    let input = req.params.input
    switch(option){
      case "lastName":
        db.Contact
        .find({lastName: { $regex: new RegExp("^" + input.toLowerCase(), "i") }})
        .sort({lastName: 1})
        .then(dbModel => res.json(dbModel))
        .catch(err=>res.status(422).json(err))
        break;
      case "firstName":
        db.Contact
        .find({firstName: { $regex: new RegExp("^" + input.toLowerCase(), "i") }})
        .sort({firstName: 1})
        .then(dbModel => res.json(dbModel))
        .catch(err=>res.status(422).json(err))
        break;
      case "city":
        db.Contact
        .find({city: { $regex: new RegExp("^" + input.toLowerCase(), "i") }})
        .sort({city: 1})
        .then(dbModel => res.json(dbModel))
        .catch(err=>res.status(422).json(err))
        break;
      case "state":
        db.Contact
        .find({state: { $regex: new RegExp("^" + input.toLowerCase(), "i") }})
        .sort({state: 1})
        .then(dbModel => res.json(dbModel))
        .catch(err=>res.status(422).json(err))
        break;
      case "zip":
        db.Contact
        .find({zip: { $regex: new RegExp("^" + input.toLowerCase(), "i") }})
        .sort({zip: 1})
        .then(dbModel => res.json(dbModel))
        .catch(err=>res.status(422).json(err))
    }
  }
};