import React, { useState, useEffect } from 'react';
import axios from 'axios';
import siteUrl from './url';
import './css/activities.css'

async function getUser(token) {
    let { data } = await axios.get(`${siteUrl}/api/users/me`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    return data;
};

function displayUserData(userData) {
    return ( <>
        <h1 id = 'motivate'>Keep up the goodwork {userData.username}</h1>
        
    </>);
};

const Home = ({ loggedIn }) => {
    const token = localStorage.getItem('Token');

    const [userData, setUserData] = useState({})

    useEffect(() => {
        async function getMyInfo() {
            if (token) {
                let data = await getUser(token);
                setUserData(data);
            };
        };

        getMyInfo();
    }, []);

    const userInfo = displayUserData(userData);

    return (
        <div id='user-info'>
            {loggedIn ? userInfo : null}
        </div>
    );
};

export default Home;