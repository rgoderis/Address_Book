const db = require("../models");

// Defining methods for the contactController
module.exports = {
  findAll: function(req, res) {
    db.Contact
      .find(req.query)
    //   .sort({ date: -1 })
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
  }
};