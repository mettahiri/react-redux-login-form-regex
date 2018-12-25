import React, { Component } from 'react';
import Field from "./Field"
class LoginForm extends Component {
    state = { 
        formInit : [
            {label:"Nom", id:"nom" },
            {label:"Prénom", id:"prenom" },
            {label:"Email", id:"email" },
            {label:"confirmation Email", id:"confirmEmail" },
            {label:"Tel", id:"tel" },
            {label:"Adresse", id:"adresse" },
            {label:"Code Postal", id:"codePostal" }
        ],
        values : {
            nom:"",
            prenom:"",
            email:"",
            confirmEmail:"",
            tel:"",
            adress:"",
            codePostal:""
        }
     }
    submit = (e)=>{
            e.preventDefault()
            e.setCustomValidity("test");
    }
    onChange=(e)=>{
        const values = this.state.values;
        values[e.target.id] = e.target.value;
        this.setState({values})
        console.log(this.state.values)
    }
    render() { 
        return ( 
            <>
                <h2>S'inscrire</h2>
                <form onSubmit={this.submit} >
                    <Field labelVal="Nom" id="nom" onChange={this.onChange} />
                    <Field labelVal="Prénom" id="prenom" onChange={this.onChange}/>
                    <Field labelVal="Email" id="email" onChange={this.onChange}/>
                    <Field labelVal="confirmation Email" id="confirmEmail" onChange={this.onChange}/>
                    <Field labelVal="Tel" id="tel" onChange={this.onChange}/>
                    <Field labelVal="Adresse" id="adresse" onChange={this.onChange}/>
                    <Field labelVal="Code Postal" id="codePostal" onChange={this.onChange}/>
                    <input className="btn btn-success" type="submit" value="Envoyer"/>
                    <a href="#" onClick={this.props.onChangeForm} >J'ai deja un compte! je me connecte</a>
                </form>
            </>
         );
    }
}
 
export default LoginForm;