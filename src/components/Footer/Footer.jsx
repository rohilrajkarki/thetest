import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer-here'>
            <div className="footer-first">
                <div>
                    <h1>Shop</h1>
                </div>
                <div>
                    <Link to='/contact'>
                        <h1 >contact</h1>
                    </Link>
                </div>
                <div>
                    <Link to='home'>
                        <h1>Home</h1>
                    </Link>
                </div>
            </div>
            <div className="footer-second">
                <h2>Suscribe to our newsletter</h2>
                <input type="text" placeholder='Your Email' />

            </div>
        </div>
    )
}

export default Footer