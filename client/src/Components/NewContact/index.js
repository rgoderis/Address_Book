import React from "react";
import API from "../../utils/API";
import Input from "../Input";
import DropDown from "../DropDown"

class NewContact extends React.Component{
    state = {
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        days:[],
        states: ["AL","AK", "AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA", "WA","WV","WI","WY"],
        contact: {
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
    }

    handleInputChange = e=>{
        const {name, value} = e.target;
        this.setState({[name]: value})
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
                                    placeholder = {"First Name"}
                                    type= {"text"}
                                    value = {this.state.contact.firstName}
                                    onChange = {this.handleInputChange}
                                    name = {"firstName"}
                                />
                            </div>
                            <div className="col-lg-6">
                                <label>Last Name</label>
                                <Input
                                    placeholder = {"Last Name"}
                                    type= {"text"}
                                    value = {this.state.contact.lastName}
                                    onChange = {this.handleInputChange}
                                    name = {"lastName"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-6">
                                <label>Email</label>
                                <Input
                                    placeholder = {"Email"}
                                    type= {"email"}
                                    value = {this.state.contact.email}
                                    onChange = {this.handleInputChange}
                                    name = {"email"}
                                />
                            </div>
                            <div className="col-lg-3">
                                <label>Phone Number</label>
                                <Input
                                    placeholder = {"Phone Number"}
                                    type= {"tel"}
                                    value = {this.state.contact.phoneNumber}
                                    onChange = {this.handleInputChange}
                                    name = {"phoneNumber"}
                                />
                            </div>
                            <div className="col-lg-2">
                                <label>Birth Month</label>
                                <DropDown
                                    array = {this.state.months}
                                    value = {this.state.contact.birthMonth}
                                    onChange = {this.handleInputChange}
                                    name={"birthday.month"}
                                />
                            </div>
                            <div className="col-lg-1">
                                <label>Birth Day</label>
                                <DropDown
                                    array = {this.state.days}
                                    value = {this.state.contact.birthDay}
                                    onChange = {this.handleInputChange}
                                    name={"birthday.day"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <div className="row">
                            <div className="col-lg-6">
                                <Input
                                    placeholder = {"Address"}
                                    type= {"text"}
                                    value = {this.state.contact.address}
                                    onChange = {this.handleInputChange}
                                    name = {"address.address"}
                                />
                            </div>
                            <div className="col-lg-3">
                                <Input
                                    placeholder = {"City"}
                                    type= {"text"}
                                    value = {this.state.contact.city}
                                    onChange = {this.handleInputChange}
                                    name = {"address.city"}
                                />
                            </div>
                            <div className="col-lg-1">
                                <DropDown
                                    array = {this.state.states}
                                    value = {this.state.contact.state}
                                    onChange = {this.handleInputChange}
                                    name={"address.state"}
                                />
                            </div>
                            <div className="col-lg-2">
                                <Input
                                    placeholder = {"Zip"}
                                    type= {"text"}
                                    value = {this.state.contact.zip}
                                    onChange = {this.handleInputChange}
                                    name = {"address.zip"}
                                />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-lg">Add Contact</button>
                </form>
            </div>
        )
    }
}

export default NewContact
