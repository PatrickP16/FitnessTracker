import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import App from './App'

// ReactDOM.render(<Header />, document.getElementById('root'))

// ReactDOM.render(<Login />, document.getElementById('root'))
// ReactDOM.render(<Routines />, document.getElementById('root'))


ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
)
