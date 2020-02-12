import React from "react";
import ContactCard from "../ContactCard";
import API from "../../utils/API"


class Landing extends React.Component {
    state = {
        contacts: []
    }
    loadContacts = ()=>{
        let contacts = [];
        API.getContacts()
        .then(res=>{
            res.data.forEach(contact=>{
                contacts.push(contact)
            })
            this.setState({contacts: contacts})
            console.log(this.state.contacts)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    componentDidMount(){
        this.loadContacts();
    }

    render(){
        return (
            <div>
            {this.state.contacts.map(contact=>(
                <div>
                    <ContactCard
                        firstName = {contact.firstName}
                        lastName = {contact.lastName}
                        birthMonth = {contact.birthMonth}
                        birthDay = {contact.birthDay}
                        email = {contact.email}
                        address = {contact.address}
                        city = {contact.city}
                        state = {contact.state}
                        zip = {contact.zip}
                        notes = {contact.notes}
                        phone = {contact.phone}
                    />
                </div>
            ))}
            </div>
        )
    }
}

export default Landing