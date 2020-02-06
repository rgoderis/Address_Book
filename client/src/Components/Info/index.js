import React from "react";

function Info (props){
    return (
        <div>
            <p>Email: {props.email}</p>
            <p>Address: {props.address}</p>
            <p>Birthday: {props.birthday}</p>
            <div>
                <h3>Notes</h3>
                {props.notes}
            </div>
        </div>
    )
}

export default Info