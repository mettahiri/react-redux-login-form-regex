import React, { Component } from 'react';
import Field from './Field'
class SignUpForm extends Component {
    state = { 
        email : '',
        mdp:''
     }

   onChange=(e)=>{
       const values = this.state;
       values[e.target.id] = e.target.value;
       this.setState({values})
   }

    render() { 
        return ( 
            <>
                <h2>Se connecter</h2>
                <form >
                    <Field 
                     labelVal="Email" 
                     id="email" 
                     onChange={this.onChange} 
                    />

                    <Field 
                     labelVal=" Mot de passe"
                     id="mdp"
                     onChange={this.onChange}
                    />

                    <input 
                     className="btn btn-success" 
                     type="submit" 
                     value="Envoyer"
                    />

                    <a href="#" onClick={this.props.onChangeForm} > S'inscrire </a>
                </form>
            </>
         );
    }
}
 
export default SignUpForm;