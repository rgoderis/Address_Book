import React from "react";

function SearchBar(props){
        return (
            <div className="form-group">
                <h3 className="d-inline">Search By: </h3>
                <select className="form-control d-inline w-25" onChange={props.option}>
                    <option value={false}>see options below</option>
                    <option value="lastName">Last Name</option>
                    <option value="firstName">First Name</option>
                    <option value="city">City</option>
                    <option value="state">State</option>
                    <option value="zip">Zip</option>
                </select>
                <input className="form-control w-50 d-inline" onChange={props.input}/>
                <button className="btn btn-primary " onClick={props.onClick}>Search</button>
            </div>
        )
}

export default SearchBar
