import React, { useState, useEffect } from 'react'
import axios from 'axios'

async function getRoutines() {
    let { data } = await axios.get ( 
        'http://fitnesstrac-kr.herokuapp.com/api/routines'
    )
    return data 
}

const Routines = () => {
    const [ routines, setRoutines ] = useState([])

    const [ page, setPage ] = useState(0)

    useEffect(() => {
        async function getAllRoutines() {
            let data = await getRoutines()
            setRoutines( data )
        }

        getAllRoutines()
        // EMPTY [] MAKES IT SO USE EFFECT ONLY RUNS ONCE 
    }, [])


let pageLimit = routines.slice(0 + page * 20, page * 20 + 20)

let displayRoutines = pageLimit.map((r, index) => {
    return <SingleRoutine key = { index } routine = { r } />
})

return (
    <div className = 'routines'>
        <button onClick = {() => setPage( page + 1)}> Next 20 </button>
        {displayRoutines}
    </div>
)
}

const SingleRoutine = ({ routine }) => {
    const activities = routine.activities
  
    // same thing as mapping routines but for activities
    let displayActivities = activities.map((a, index) => {
      return <Activity key={index} activity={a} />
    })
  
    return (
      <div className='routine'>
        <h1>{routine.name}</h1>
        <h2>Creator: {routine.creatorName}</h2>
        <h3>Goal: {routine.goal}</h3>
        <ul>{displayActivities}</ul>
      </div>
    )
  }
  
  const Activity = ({ activity }) => {
    return (
      <li className='activity'>
        <h3>{activity.name}</h3>
        <h3>{activity.description}</h3>
      </li>
    )
  }

export default Routines