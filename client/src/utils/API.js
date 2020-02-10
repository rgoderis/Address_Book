import axios from "axios";

export default {
    saveContact: function(contactData){
        return axios.post("/api/contacts", contactData)
    }
}