import React, { Component } from 'react';
import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpForm"

class User extends Component {
    state = { 
        formToggle : false
     }
     onChangeForm = ()=>{
         this.state.formToggle ? 
         this.setState({ formToggle : false  }) :
         this.setState({ formToggle : true  });
     }
    render() { 
        const FORM =  this.state.formToggle ?
        <LoginForm onChangeForm={this.onChangeForm}  /> :
        <SignUpForm onChangeForm={this.onChangeForm} /> ;

       return(
        <section className="App">
            {FORM}
        </section>

       );
       
       
    }
}
 
export default User;