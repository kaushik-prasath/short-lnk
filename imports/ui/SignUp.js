import React from 'react';
import {Link} from 'react-router';

import {Accounts} from 'meteor/accounts-base';

export default class SignUp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
  }

  handleSubmit(e){
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if(password.length < 8){
      return this.setState({error: 'Password must be alteast 8 characters.'})
    }

    Accounts.createUser({email,password},(err) => {
      if(err){
        this.setState({error: err.reason+'.'});
        console.log(err);
      }else{
        this.setState({error: ''});
      }
    });

   
  }
  
  render(){
    return (
      <div>
        <h1>Sign Up to create a new account.</h1>
        {this.state.error?<p>{this.state.error}</p>:undefined}

        <form onSubmit={this.handleSubmit.bind(this)} noValidate>
          <input type="email" ref="email" placeholder="Enter your email."/>
          <input type="password" ref="password" placeholder="Password."/>
          <button>Create Account</button>
        </form>
       
        <Link to="/">Already have an account?</Link>
      </div>
    );
  }
} 
