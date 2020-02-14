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
        })
        .catch(err=>{
            console.log(err)
        })
    }

    deleteContact=(id)=>{
        API.deleteContact(id)
        .catch(err=>console.log(err))
        window.location.reload()
    }

    componentDidMount(){
        this.loadContacts();
        console.log(this.state.contacts)
    }

    render(){
        return (
            <div className="text-center">
                <h1>Contacts</h1>
                {this.state.contacts.map(contact=>(
                    <div>
                        <Link to={"/details/"+contact._id} className="text-dark d-inline float-left">
                            <h2>{contact.lastName}, {contact.firstName}</h2>
                        </Link>
                        <button className="btn btn-danger float-right" onClick={()=>this.deleteContact(contact._id)}>Delete Contact</button>
                    </div>
                ))}
            </div>
        )
    }
}

export default Landing