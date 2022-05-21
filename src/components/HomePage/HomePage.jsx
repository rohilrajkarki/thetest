import React from 'react'
import './HomePage.scss'

const HomePage = () => {
    return (
        <div className='main-home'>
            <div className="home-left">
                <h2>Hello World!!</h2>
            </div>
            <div className="home-right">
                <img src="https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870" alt="" />
            </div>
        </div>
    )
}

export default HomePage