import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h1>About page</h1>
            <p>This is the About the React Router </p>
            <NavLink to="/">Go To Home Page</NavLink>
        </div>
    )
}

export default About