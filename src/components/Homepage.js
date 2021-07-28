import React from 'react'
import {useHistory} from 'react-router-dom'

const Homepage = () => {
    let history = useHistory()
    return (
        <div>
            <h1>Homepage</h1>
            <button onClick={()=>history.push('/problem-showcase/secondpage')}>Click here</button>
        </div>
    )
}

export default Homepage
