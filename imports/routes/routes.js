import { Meteor } from 'meteor/meteor';
import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';


import SignUp from '../ui/SignUp';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

window.browserHistory = browserHistory;

const unAuthenticatedPages = ['/','/signup'];
const authenticatedPages = ['/links'];

const onEnterPublicPage= () => {
  if(Meteor.userId()){
    browserHistory.replace('/links');
  }
};

const onEnterPrivatePage = () => {
  if(!Meteor.userId()){
    browserHistory.replace('/');
  }
};  

export const onAuthChange = (isAuthenticated) => {
    const pathName = browserHistory.getCurrentLocation().pathname;
      const isUnauthenticatedPage = unAuthenticatedPages.includes(pathName);
      const isAuthenticatedPage = authenticatedPages.includes(pathName);

      if(isUnauthenticatedPage && isAuthenticated){
        browserHistory.replace('/links');
      }else if(isAuthenticatedPage && !isAuthenticated){
        browserHistory.replace('/');
      }
};

export const routes = (
  <Router history={browserHistory}>  
      <Route path='/' component={Login} onEnter={onEnterPublicPage}/>
      <Route path='/signup' component={SignUp} onEnter={onEnterPublicPage}/>
      <Route path='/links' component={Link} onEnter={onEnterPrivatePage}/>
      <Route path='*' component={NotFound}/>
  </Router>
  
);