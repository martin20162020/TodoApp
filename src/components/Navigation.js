import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import WelcomePage from './WelcomePage';
import { connect } from "react-redux";

const Navigation = (state) => {
    console.log('hello from the navigation side: ', state.auth.isSignedIn)
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <WelcomePage isSignedIn={state.auth.isSignedIn}/>
            </Route>
            {state.auth.isSignedIn || state.auth.isSignedIn === null ? 
            <Route render={()=> <Redirect to= {{pathname:'/homepage'}}/>} component={App}/> :
            <Route render={()=> <Redirect to= {{pathname:'/'}}/>}/>
            }
        </Switch>
        </BrowserRouter>
    )
}

const mapStateToProps = state => {
    return {
      auth: state.auth,
    };
  };

export default connect(mapStateToProps)(Navigation)
