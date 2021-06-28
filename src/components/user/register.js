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
        confirmPassword, setConfirmPassword,
        setLoggedIn
    } = fields;

    try {
        if (password !== confirmPassword) {
            setPassword('');
            setConfirmPassword('');
            return setError('Passwords do not match, please try again');
        };

        const { data } = await axios({
            method: 'POST',
            url: `${url}/api/users/register`,
            data: {
                username: `${name}`,
                password: `${password}`
            }
        });
        
        localStorage.setItem('Token', data.token);
        localStorage.setItem('User', data.user.username);
        setLoggedIn(true);

        history.push('/');
    } catch (error) {
        setError('Duplicate Username try a different name');
        setName('');
        setPassword('');
        setConfirmPassword('');
    };
};

const Register = ({ loggedIn, setLoggedIn }) => {
    let history = useHistory();

    const [ error, setError ] = useState('');
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    useEffect(() => {
        if (loggedIn) {
            location.assign('/');
        };
    }, []);

    const submitReg = (event) => {
        event.preventDefault();

        const fields = {
            history,
            setError, name, setName, password, setPassword, 
            confirmPassword, setConfirmPassword, setLoggedIn
        };

        handleSubmit(fields);
    };

    return (<>
        <form id='register' onSubmit={submitReg}>
            <h3>Registration---</h3>
            
            <p className='error'>{error}</p>
            <label htmlFor='username'>
                Username:
                </label>

            <input type='text' placeholder='USERNAME:' 
                minLength={4} required 
            value={name} onChange={(event) => 
                    setName(event.target.value)}/>
                
            <label htmlFor='password'>
                Password:
                </label>

            <input type='password' placeholder='PASSWORD:'
                 minLength={8} required
            value={password} onChange={(event) =>
                 setPassword(event.target.value)}/>

            <label htmlFor='pass-confirm'>
                Confirm Password:
                </label>

            <input type='password' placeholder='CONFIRM PASSWORD:' 
                minLength={8} required
            value={confirmPassword} onChange={(event) =>
                 setConfirmPassword(event.target.value)}/>
            
            <button id ='btn-login' type='submit'>
                Submit Registration
                </button>
            
            <p>Already Registered <Link id='log-in' to='/login'>
                Log In
                </Link></p>   
        </form>
    </>);
};

export default Register;