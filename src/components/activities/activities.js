import React, { useState, useEffect } from 'react';
import axios from 'axios';
import siteUrl from '../url';
import '../css/routines.css';

async function getActivities() {
    let { data } = await axios.get(`${siteUrl}/api/activities`);
    return data;
};

function displayActivities(activities) {
    const activityList = activities.map((act, index) => {
        return (
            <div key={index} className='activity'>
                <h1>Name: {act.name}</h1>
                <h1>Description: {act.description}</h1>
            </div>
        );
    });

    return activityList;
};

const Activities = ({ loggedIn }) => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        async function getAllActivities() {
            let data = await getActivities();
            setActivities(data);
        };

        getAllActivities();
    }, []);

    const activityList = displayActivities(activities);

    return (
        <div id='activity-list'>
            {activityList}
        </div>
    );
};

export default Activities;