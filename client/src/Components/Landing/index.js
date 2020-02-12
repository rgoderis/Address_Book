import React from "react";
import API from "../../utils/API"
import {Link} from "react-router-dom"


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
        console.log(this.state.contacts)
    }

    render(){
        return (
            <div>
                <h2>Contact List</h2>
                {this.state.contacts.map(contact=>(
                    <div>
                        <Link to={"/details/"+contact._id}>
                            <h3>{contact.lastName}, {contact.firstName}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
}

export default Landing