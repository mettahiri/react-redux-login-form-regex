import React from "react";


const Field = (props)=>{
 
    return (
        <div className="inputBox">
            <input 
             type={props.type}
             id= {props.id}             
             onChange ={props.onChange}
             required
            />
            <label htmlFor={props.id}>
                {props.labelVal}
            </label>

        </div>
    );
}

export default Field;