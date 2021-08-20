import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Welcome from './WelcomePage'

const Navigation = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Welcome}/>
            <Route exact path='https://create-a-list.herokuapp.com/homepage' component={App}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Navigation
