import React from "react";
import {Link} from "react-router-dom";

class Nav extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark fixed-top ">
                <div className="navbar-brand">Contact List</div>
                <div>
                    <span className="mr-2">
                        <Link to="/">
                            <button className="text-white bg-dark btn-dark btn">View Contacts</button>
                        </Link>
                    </span>
                    <span className="mr-2">
                        <Link to="/new">
                            <button className="text-white bg-dark btn btn-dark">New Contact</button>
                        </Link>
                    </span>
                </div>
            </nav>
        )
    }
}
export default Nav