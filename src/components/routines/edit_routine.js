import React, { useEffect, useState } from 'react';
import axios from 'axios';
import siteUrl from '../url';

async function handleSubmit(event, { token, setError, routine }) {
    event.preventDefault();
    
    const [ name, goal, isPublic ] = event.target;

    try {
        await axios(`${siteUrl}/api/routines/${routine.id}`, {
            method: 'PATCH',
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
        
        location.assign('/routines')
    } catch(error) {
        setError('Routine Exists...Rename')
        console.error(error);
    };
};

const EditPost = ({ routine, setEditing }) => {
    const token = localStorage.getItem('Token')

    const [error, setError] = useState('');
    const [editName, setEditName] = useState('');
    const [editGoal, setEditGoal] = useState('');

    const submitFields = { token, setError, routine }

    useEffect(() => {
        setEditName(routine.name);
        setEditGoal(routine.goal);
    }, []);
    
    return (
        <form className='edit-routine' onSubmit={(event) => 
            handleSubmit(event, submitFields)}>
            <h3>Edit Routine</h3>
            
            <p className='error'>{error}</p>

            <label  htmlFor='edit-name'>Name:</label>
            <input className='edit-name' type='text' 
                placeholder='NAME' required
                value={editName} onChange={(event) => 
                    setEditName(event.target.value)} />

            <label htmlFor='edit-goal'>Goal:</label>
            <input className='edit-goal' type='text' 
                placeholder='GOAL' required
                value={editGoal} onChange={(event) => 
                    setEditGoal(event.target.value)} />
            
            <label htmlFor='edit-public'>Public:</label>
            <input className='edit-public' type='checkbox' 
                defaultChecked={routine.isPublic} />
            
            <button className='sub-edits' type='submit'>Post</button>
            <button className='cancel' type='button' onClick={(event) => {
                event.preventDefault();
                setEditing(false);
            }}>Cancel</button>
        </form>
    );
};

export default EditPost;