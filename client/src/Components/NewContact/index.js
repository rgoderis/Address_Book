import React from "react";
import API from "../../utils/API";
import Input from "../Input";
import DropDown from "../DropDown"

class NewContact extends React.Component{
    state = {
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        days:[],
        states: ["AL","AK", "AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA", "WA","WV","WI","WY"],
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        birthMonth: "",
        birthDay: "",
        address: "",
        city: "",
        state: "",
        zip: ""
    }

    handleInputChange = event=>{
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event =>{
        event.preventDefault()
        console.log(this.state.firstName)
        console.log(this.state.lastName)
        console.log(this.state.email)
        console.log(this.state.phoneNumber)
        console.log(this.state.birthMonth)
        console.log(this.state.birthDay)
        console.log(this.state.address)
        console.log(this.state.city)
        console.log(this.state.state)
        console.log(this.state.zip)
    }

    componentDidMount(){
        let days=[]
        for(let i=1; i <=31; i++){
            days.push(i)
        }
        this.setState({days: days})
    }
    render(){
        return (
            <div className="container">
                <h2>New Contact</h2>
                <form>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-6">
                                <label>First Name</label>
                                <Input
                                    placeholder = "First Name"
                                    type= "text"
                                    value = {this.state.firstName}
                                    onChange = {this.handleInputChange}
                                    name = "firstName"
                                />
                            </div>
                            <div className="col-lg-6">
                                <label>Last Name</label>
                                <Input
                                    placeholder = "Last Name"
                                    type= "text"
                                    value = {this.state.lastName}
                                    onChange = {this.handleInputChange}
                                    name = "lastName"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-6">
                                <label>Email</label>
                                <Input
                                    placeholder = "Email"
                                    type= "email"
                                    value={this.state.email}
                                    onChange = {this.handleInputChange}
                                    name = "email"
                                />
                            </div>
                            <div className="col-lg-3">
                                <label>Phone Number</label>
                                <Input
                                    placeholder = "Phone Number"
                                    type= "tel"
                                    value = {this.state.phoneNumber}
                                    onChange = {this.handleInputChange}
                                    name = "phoneNumber"
                                />
                            </div>
                            <div className="col-lg-2">
                                <label>Birth Month</label>
                                <DropDown
                                    array = {this.state.months}
                                    value = {this.state.birthMonth}
                                    onChange = {this.handleInputChange}
                                    name={"birthMonth"}
                                />
                            </div>
                            <div className="col-lg-1">
                                <label>Birth Day</label>
                                <DropDown
                                    array = {this.state.days}
                                    value = {this.state.birthDay}
                                    onChange = {this.handleInputChange}
                                    name={"birthDay"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <div className="row">
                            <div className="col-lg-6">
                                <Input
                                    placeholder = "Address"
                                    type= "text"
                                    value = {this.state.address}
                                    onChange = {this.handleInputChange}
                                    name = "address"
                                />
                            </div>
                            <div className="col-lg-3">
                                <Input
                                    placeholder = "City"
                                    type= "text"
                                    value = {this.state.city}
                                    onChange = {this.handleInputChange}
                                    name = "city"
                                />
                            </div>
                            <div className="col-lg-1">
                                <DropDown
                                    array = {this.state.states}
                                    value = {this.state.state}
                                    onChange = {this.handleInputChange}
                                    name={"state"}
                                />
                            </div>
                            <div className="col-lg-2">
                                <Input
                                    placeholder = "Zip"
                                    type= "text"
                                    value = {this.state.zip}
                                    onChange = {this.handleInputChange}
                                    name = "zip"
                                />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-lg" onClick={this.handleFormSubmit}>Add Contact</button>
                </form>
            </div>
        )
    }
}

export default NewContact
