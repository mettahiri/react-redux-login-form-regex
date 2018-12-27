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
            <span id={props.id+"Error"} className="errorMsg">{props.errorMsg}</span>

        </div>
    );
}

export default Field;