import React from "react";

function ContactCard(props){
    return (
        <div>
            <p>{props.lastName}, {props.firstName}</p>
        </div>
    )
}



export default ContactCard