import React from "react";
import ContactCard from "../ContactCard"
import Info from "../Info"

class Landing extends React.Component {
    state = {
        contacts: [
            {
                lastName: "Goderis",
                firstName: "Ryan",
                birthday: "August 8",
                email: "rgoderis789@gmail.com",
                address: "3212 Decker Ave., Orlando FL. 32833",
                notes: ["Great guy", "tesljlsajf"],
                displayInfo: false
            },
            {
                lastName: "Smith",
                firstName: "John",
                birthday: "July 4",
                email: "johnsmith@email.com",
                address: "12345 Main St., Orlando FL. 32801",
                notes: ["asfsaf"],
                displayInfo: false
            },
            {
                lastName: "Barker",
                firstName: "Bob",
                birthday: "December 15",
                email: "test@email.com",
                address: "22222 Front St., Tampa FL. 33333",
                notes: ["asdfasfa", "asdfasfasfda", "dsafasfasfdasfas"],
                displayInfo: false
            },
        ]
    }
    render(){
        return (
            <div>
            {this.state.contacts.map(contact=>(
                <div>
                <ContactCard
                    firstName = {contact.firstName}
                    lastName = {contact.lastName}
                />
                <button>View More</button>
                <Info
                    birthday = {contact.birthday}
                    email = {contact.email}
                    address = {contact.address}
                    notes = {contact.notes}
                />
                </div>
            ))}
            </div>
        )
    }
}

export default Landing