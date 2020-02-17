import axios from "axios";

export default {
  // Gets all books
  getContacts: function() {
    return axios.get("/api/contacts");
  },
  // Gets the book with the given id
  getContact: function(id) {
    return axios.get("/api/contacts/" + id);
  },
  // Deletes the book with the given id
  deleteContact: function(id) {
    return axios.delete("/api/contacts/" + id);
  },
  // Saves a book to the database
  saveContact: function(contactData) {
    return axios.post("/api/contacts", contactData);
  },
  saveNote: function(id, noteData) {
    return axios.post("/api/contacts/"+id+"/note", noteData)
  },
  deleteNote: function(contactId, noteId){
    return axios.delete("/api/contacts/"+contactId+"/note/"+noteId)
  },
  searchContacts: function(option, input){
    console.log("APIs")
    console.log(option)
    console.log(input)
    return axios.get("/api/contacts/"+option+"/"+input)
  }
};