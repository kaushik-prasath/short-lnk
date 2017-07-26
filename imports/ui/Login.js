import React from 'react';
import {Link} from 'react-router';


import {Meteor} from 'meteor/meteor';

export default class Login extends React.Component {

    constructor(props){
    super(props);
    this.state = {
      error: ''
    };
  }

    handleSubmit(e){
          e.preventDefault();

          let email = this.refs.email.value;
          let password = this.refs.password.value;

          Meteor.loginWithPassword({email},password,(err) => {
            if(err){
              this.setState({error: 'Unable to Login.Check email and password.'});
            }else{
              this.setState({error:''});
            }
          });

        
  }
  render(){
    return (
        <div>
            <h1>Login to Short lnk</h1>

              {this.state.error?<p>{this.state.error}</p>:undefined}

              <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="email" ref="email" placeholder="Enter your email."/>
                <input type="password" ref="password" placeholder="Password."/>
                <button>Login</button>
              </form>

            <Link to="/signup">Create a new Account.</Link>
        </div>
    );
  }
} 
