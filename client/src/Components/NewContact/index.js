import React from "react";
import API from "../../utils/API"

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
                                <input className="form-control" type="text" placeholder="First Name"></input>
                            </div>
                            <div className="col-lg-6">
                                <label>Last Name</label>
                                <input className="form-control" type="text" placeholder="Last Name"></input>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-lg-6">
                                <label>Email</label>
                                <input className="form-control" type="email" placeholder="Email"></input>
                            </div>
                            <div className="col-lg-3">
                                <label>Phone Number</label>
                                <input className="form-control" type="tel" placeholder="Phone Number"></input>
                            </div>
                            <div className="col-lg-2">
                                <label>Birth Month</label>
                                <select class="form-control">
                                    {this.state.months.map(month=>(
                                        <option>{month}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-lg-1">
                                <label>Birth Day</label>
                                <select class="form-control">
                                    {this.state.days.map(day=>(
                                        <option>{day}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <div className="row">
                            <div className="col-lg-6">
                                <input className="form-control" type="text" placeholder="Address"></input>
                            </div>
                            <div className="col-lg-3">
                                <input className="form-control"  type="text" placeholder="City"></input>
                            </div>
                            <div className="col-lg-1">
                                <select class="form-control">
                                    {this.state.states.map(s=>(
                                        <option>{s}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-lg-2">
                                <input className="form-control"  type="number" placeholder="Zip"></input>
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
