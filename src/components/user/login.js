import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import url from '../url';
import '../css/login-register.css';

async function handleSubmit(fields) {
    const {
        history, setError,
        name, setName, 
        password, setPassword, 
        setLoggedIn
    } = fields;

    try {
        const { data } = await axios({
            method: 'POST',
            url: `${url}/api/users/login`,
            data: {
                username: `${name}`,
                password: `${password}`
            }
        });
        
        localStorage.setItem('Token', data.token);
        localStorage.setItem('User', data.user.username);
        setLoggedIn(true)

        history.push('/');
    } catch (error) {
        setError('Username/Password is invalid');
        setName('');
        setPassword('');
    };
};

const Login = ({ loggedIn, setLoggedIn }) => {
    let history = useHistory();

    const [ error, setError ] = useState('');
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');

    useEffect(() => {
        if (loggedIn) {
            location.assign('/');
        };
    }, []);

    const submitLogin = (event) => {
        event.preventDefault();

        const fields = {
            history, setError,
            name, setName, 
            password, setPassword,
            setLoggedIn
        };

        handleSubmit(fields);
    };

    return ( <>
        <form id='log-in' onSubmit={submitLogin}>
            <h3>Log In</h3>
            
            <p className='error'>{error}</p>
            <label  htmlFor='username'>
                Username:
                </label>

            <input type='text' placeholder='USERNAME'
                 minLength={4} required 
            value={name} onChange={(event) => 
                    setName(event.target.value)}/>
                
            <label htmlFor='password'>
                Password:
                </label>

            <input type='password' placeholder='PASSWORD' 
                minLength={8} required
            value={password} onChange={(event) => 
                setPassword(event.target.value)}/>
            
            <button id ='btn-login' type='submit'>Log In</button>
            <p>Need an account--- <Link id='sign-up' to='/register'>
                Join Now</Link></p>     
        </form>
    </> );
};

export default Login;