import React from "react";
import ContactCard from "../ContactCard"

class Landing extends React.Component {
    render(){
        state = {
            contacts: [
                {
                    lastName: "Goderis",
                    firstName: "Ryan",
                    birthday: "August 8",
                    email: "rgoderis789@gmail.com",
                    address: "3212 Decker Ave., Orlando FL. 32833",
                    notes: []
            },
                {
                    lastName: "Goderis",
                    firstName: "Ryan",
                    birthday: "August 8",
                    email: "rgoderis789@gmail.com",
                    address: "3212 Decker Ave., Orlando FL. 32833",
                    notes: []
            },
                {
                    lastName: "Goderis",
                    firstName: "Ryan",
                    birthday: "August 8",
                    email: "rgoderis789@gmail.com",
                    address: "3212 Decker Ave., Orlando FL. 32833",
                    notes: []
            },
            ]
        }
        return (
            <div>
            {this.state.contacts.map(contact=>(
                <ContactCard
                    firstName = {contact.firstName}
                    lastName = {contact.lastName}
                    birthday = {contact.birthday}
                    email = {contact.email}
                    address = {contact.address}
                    notes = {contact.notes}
                />
            ))}
            </div>

        )
    }
}

export default Landing