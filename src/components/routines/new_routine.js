import React, { useState } from 'react';
import axios from 'axios';
import Popup from 'react-popup';
import siteUrl from '../url';

async function handleSubmit(event, token, setError) {
    event.preventDefault();

    const { target } = event;
    const [ name, goal, isPublic ] = target;

    try {
        await axios(`${siteUrl}/api/routines`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: {
                name: `${name.value}`,
                goal: `${goal.value}`,
                isPublic: `${isPublic.checked}`
            }
        });
        alert('Post successful\nTime to start working out!!');
        location.assign('/routines');
        
    } catch(error) {
        setError('Routine already exists');
        console.error(error);
    };
    
};

const NewRoutine = ({token}) => {
    const [error, setError] = useState('');
    const [routName, setRoutName] = useState('');
    const [routGoal, setRoutGoal] = useState('');
    
    return (
        <form id='new-routine' onSubmit={(event) =>
             handleSubmit(event, token, setError)}>
            <h3>Make A Routine</h3>
            
            <p className='error'>{error}</p>

            <label  htmlFor='new-name'>Name---</label>
            <input id='new-name' type='text' 
                placeholder='...NAME...' required
                value={routName} onChange={(event) => 
                    setRoutName(event.target.value)} />

            <label htmlFor='new-goal'>Goal---</label>
            <input id='new-goal' type='text' 
                placeholder='...GOAL...' required
                value={routGoal} onChange={(event) => 
                    setRoutGoal(event.target.value)} />
            
            <label htmlFor='public-box'>Public---</label>
            <input id='public-box' type='checkbox' />
            
            <button id ='btn-submit' type='submit'>Submit</button>    
        </form>
    );
  
};

export default NewRoutine;