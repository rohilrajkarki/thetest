import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <ul className="navbar-links">
                {['home', 'contact'].map((item) => (
                    <li key={`link-${item}`}>
                        <div />
                        <Link to={`${item}`}>{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavBar