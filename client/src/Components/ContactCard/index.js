import React from "react";

function ContactCard(props){
    return (
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
        </div>
    )
}



export default ContactCard