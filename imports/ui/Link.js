import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Links} from '../api/links';
export default class Link extends React.Component {

    handleClick(){
       Accounts.logout();
    }

    handleSubmit(e){
        e.preventDefault();

        let url = this.refs.url.value.trim();
        if(url){
            Links.insert({url});
            this.refs.url.value = '';
        }
    }
 
    render(){
        return (
            <div>
                <h1>Link page here </h1>
                <button onClick={this.handleClick.bind(this)}>Log Out</button>
                <p>Links here</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="url" placeholder="Enter url here"/>
                    <button>Add Link</button>
                </form>
            </div>
        );
    }
}