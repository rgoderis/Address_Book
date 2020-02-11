import React from "react";
import ContactCard from "../ContactCard"
import Info from "../Info"

class Landing extends React.Component {
    state = {
        contacts: [
            {
                lastName: "Smith",
                firstName: "John",
                birthday: "July 4",
                email: "johnsmith@email.com",
                phone: "407-575-6164",
                address: "12345 Main St., Orlando FL. 32801",
                notes: ["Test"],
            },
            {
                lastName: "Barker",
                firstName: "Bob",
                birthday: "December 15",
                email: "test@email.com",
                phone: "407-575-6164",
                address: "22222 Front St., Tampa FL. 33333",
                notes: ["Test1", "Test2", "Test3"],
            },
        ]
    }
    loadContacts = ()=>{
        API.getContacts()
        .then(res=>{
            console.log(res)
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
                        birthday = {contact.birthday}
                        email = {contact.email}
                        address = {contact.address}
                        notes = {contact.notes}
                        phone = {contact.phone}
                    />
                    <Info
                        birthday = {contact.birthday}
                        email = {contact.email}
                        address = {contact.address}
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