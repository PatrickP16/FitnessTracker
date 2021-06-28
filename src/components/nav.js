import React from 'react';
import { Link } from 'react-router-dom';
import './css/nav.css';

const Nav = ({ loggedIn, logOut }) => {
    return (
      <div>
       <header id ='header'>
        <h1 id ='headertitle'>Fitness Tracker 3000</h1>
        {/* 
        THE TEST
        */ }
          <div id='nav'>
            <div id='links'>
                <Link to='/'>Home</Link>
                <Link to='/activities'>Activities</Link>
                <Link to='/routines'>Routines</Link>
                {loggedIn ? 
                    <Link to='/my-routines'>My Routines</Link> : null}
                {loggedIn ? 
                    <button onClick={logOut}>Log Out</button> : null}
                {!loggedIn ?
                     <Link to='/login'>LogIn / Join</Link> : null}
            </div>
            </div>
        {/* DELETE TILL HERE */}
        </header>
{/* 
        <div id='nav'>

            <div id='links'>
                <Link to='/'>Home</Link>
                <Link to='/activities'>Activities</Link>
                <Link to='/routines'>Routines</Link>
                {loggedIn ? 
                    <Link to='/my-routines'>My Routines</Link> : null}
                {loggedIn ? 
                    <button onClick={logOut}>Log Out</button> : null}
                {!loggedIn ?
                     <Link to='/login'>LogIn / Join</Link> : null}
            </div>
        </div> */}
        </div> 
    );
};

export default Nav;