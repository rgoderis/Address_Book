import axios from "axios";

export default {
    getContacts: function() {
        console.log("hello")
        return axios.get("/api/contacts");
      },
    saveContact: function(contactData){
        console.log(contactData.firstName)
        return axios.post("/api/contacts", contactData)
    }
}