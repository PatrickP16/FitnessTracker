import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import axios from 'axios' 
import Routines from './components/Routines'
import Login from './components/LoginForm'
import Header from './components/Header'



const App = () =>{
    // const [signedIn, setSignedIn] = useState(false)
    return(
        <div>
            <header>
                <Header />
            </header>
        <main>
            <Login />
            <Switch>
                <Route path='/Routines' component={Routines} />
            </Switch>
        </main>
        </div>
    )
}

export default App