import React from "react";

function DropDown(props){
    return(
        <select class="form-control" {...props.onChange} {...props.value} {...props.name}>
            {props.array.map(x=>(
                <option>{x}</option>
            ))}
        </select>
    )
}

export default DropDown