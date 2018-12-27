import React, { Component } from 'react';
import {connect} from "react-redux"
import Field from "./Field"
class LoginForm extends Component {
    state = { 
       
     }
    /* handleOnSubmit = (e)=>{
            e.preventDefault()
            e.setCustomValidity("test");
    } */
   /*  handleOnChange=(e)=>{
        const values = this.state.values;
        values[e.target.id] = e.target.value;
        this.setState({values})
        console.log(this.state.values)
    } */
    render() { 
        const FORM_INIT = this.props.formInit;
        return ( 
            <>
                <h2>S'inscrire</h2>
                <form onSubmit={this.props.handleOnSubmit} >

                    {FORM_INIT.map((val,i) => <Field 
                                 key={i}
                                 labelVal={val.label} 
                                 id={val.id}
                                 onChange={this.props.handleOnChange}
                                 errorMsg={this.props.errorMsg[val.id] }
                                /> 
                        )}

                    <input disabled className="btn btn-success" type="submit" value="Envoyer"/>
                    <a href="#" onClick={this.props.onChangeForm} >
                     J'ai deja un compte! je me connecte
                    </a>
                </form>
            </>
         );
    }
}
const mapStateToProps=(state)=>{
    return {
        formInit: state.formInit,
        errorMsg : state.errorMsg,
        values : state.values

    }
}
const mapDispatchToProps = (dispatch, state)=>{
    return {
        handleOnChange : (e)=>{
            dispatch({
                type: "ON_CHANGE",
                payload : {
                    target : e.target,
                    id : e.target.id
                }
            })

        },
        handleOnSubmit : (e)=>{
            e.preventDefault();
            dispatch({
                type: "ON_SUBMIT",
                payload : {

                }
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps,)(LoginForm);