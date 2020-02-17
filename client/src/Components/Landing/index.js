import React from "react";
import API from "../../utils/API"
import {Link} from "react-router-dom"
import SearchBar from "../SearchBar"


class Landing extends React.Component {
    state = {
        contacts: [],
        option: "",
        input: ""
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

    handleOptionChange = event =>{
        if(event.target.value === "false"){
            this.setState({option:""})
        } else {
            this.setState({option:event.target.value})
        }
        
    }
    handleInputChange = event =>{
        this.setState({input: event.target.value})
    }

    handleSearchSubmit=event=>{
        event.preventDefault();
        if(!this.state.option || !this.state.input){
            console.log("please enter a valid option")
        } else {
            API.searchContacts(this.state.option, this.state.input)
            .then(res=>{
                let newContacts = []
                this.setState({contacts: []})
                res.data.forEach(contact=>{
                    newContacts.push(contact)
                })
                this.setState({contacts: newContacts})
            })
            .catch(err=>console.log(err))
        }
    }

    deleteContact=(id)=>{
        API.deleteContact(id)
        .catch(err=>console.log(err))
        window.location.reload()
    }

    componentDidMount(){
        this.loadContacts();
    }

    render(){
        if(!this.state.contacts.length){
            return (
                <div className="text-center">
                <SearchBar
                    option={this.handleOptionChange}
                    input={this.handleInputChange}
                    onClick={this.handleSearchSubmit}
                />
                <h1>No Contacts Found</h1>
            </div>
            )
        } else {
            return (
                <div className="text-center">
                    <SearchBar
                        option={this.handleOptionChange}
                        input={this.handleInputChange}
                        onClick={this.handleSearchSubmit}
                    />
                    <h1>Contacts</h1>
                    {this.state.contacts.map(contact=>(
                        <div className="container">
                            <Link to={"/details/"+contact._id} className="text-dark">
                                <h2>{contact.lastName}, {contact.firstName}</h2>
                            </Link>
                            <button className="btn btn-danger" onClick={()=>this.deleteContact(contact._id)}>Delete Contact</button>
                        </div>
                    ))}
                </div>
            )
        }
    }
}

export default Landing