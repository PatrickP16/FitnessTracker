import React, { useState, useEffect } from 'react';
import axios from 'axios';
import siteUrl from '../url';
import NewRoutine from './new_routine';
import EditPost from './edit_routine';
import DeletePost from './delete_routine';
import '../css/routines.css';

async function getAllRoutines(setRoutines) {
    let { data } = await axios.get(`${siteUrl}/api/routines`);
    setRoutines(data);
};

function userOwner(routine, user) {
    if (user && (routine.creatorName === user)) {
        return true;
    } else {
        return false;
    }
}

const RoutineReturn = ({ routine, user }) => {
    routine.isOwner = userOwner(routine, user)

    const [editing, setEditing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    
    const { activities } = routine;
    const activityList = activities.map((act, index) => {
        return <ActivityReturn key={index} activity={act} />;
    });

    return (
        <div className='routine'>
            <h1>{routine.name}</h1>
            <h2>Creator: {routine.creatorName}</h2>
            <h3>Goal: {routine.goal}</h3>
            { activities.length > 0 ? <ul>Activities:{activityList}</ul> : null }
            {routine.isOwner ? 
                <>
                    <button onClick={() => setEditing(true)}>Edit</button>
                    <button onClick={() => setDeleting(true)}>Delete</button>
                </>
            : null}
            {editing ? <EditPost routine={routine} setEditing={setEditing}/> : null}
            {deleting ? <DeletePost routine={routine} setDeleting={setDeleting}/> : null}
        </div>);
};

const ActivityReturn = ({ activity }) => {
    return (
        <li className='activity'>
            <h3>Name: {activity.name}</h3>
            <h3>Description: {activity.description}</h3>
            <h3>Count: {activity.count}</h3>
            <h3>Duration: {activity.duration} minutes</h3>
        </li>);
};

const Routines = ({ loggedIn }) => {
    const user = localStorage.getItem('User');
    const token = localStorage.getItem('Token');

    const [routines, setRoutines] = useState([]);

    useEffect(() => {
        getAllRoutines(setRoutines);
    }, []);
    
    const routineList = routines.map((rout, index) => 
        <RoutineReturn key={index} routine={rout} user={user} />);

    return (
        <div id='routine-list'>
            {loggedIn ? <NewRoutine token={token} /> : null}
            {routineList}
        </div> );
};

export default Routines;