import React from 'react'
import './ContactPage.scss'


const ContactPage = () => {
    return (
        <div className='main-contact'>
            <form>
                <input required type="text" placeholder="Name" name="user_name" id="" />
                <input required type="text" placeholder="Subject" name="user_subject" id="" />
                <input required type="email" placeholder="Email" name="user_email" id="" />
                <textarea required minLength="20" placeholder="Message" name="message" rows="5" />
                <div className="msg">
                    <div className="msg-button"><button className="msg-button">Submit</button></div>
                </div>
            </form>
        </div>
    )
}

export default ContactPage