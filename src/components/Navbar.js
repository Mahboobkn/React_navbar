import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='Navbar'>
                <div className='logo'><span>B</span>rand<span>N</span>ame</div>
                <div className='nav'>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/service">Service</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/user/shaan">User</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar