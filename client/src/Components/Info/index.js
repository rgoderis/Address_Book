import React from "react";

function Info (props){
    return (
        <div>
            <button>View More</button>
            <div>
                <p>Email: {props.email}</p>
                <p>Phone: {props.phone}</p>
                <p>Address: {props.address}</p>
                <p>Birthday: {props.birthday}</p>
                <div>
                    <h3>Notes</h3>
                    {props.notes.map(note=>(
                        <p>{note}</p>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Info