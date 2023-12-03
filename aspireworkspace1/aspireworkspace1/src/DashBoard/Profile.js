import React from 'react'
import { WiThermometerExterior, WiCloud } from "react-icons/wi";
import './Dashboardtab.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import profilePic from './assets/profile-pic.png'

function Profile() {
    return (
        <div className='card1'>
            <img src="https://blush.design/api/download?shareUri=ZnJk6hYgExwvPpCc&c=Clothing_0%7E02bad3&bg=ab59ff&w=800&h=800&fm=png" alt="" className='profile-pic' />
            <div className='card1-info'>
                <h2 className='username'>Welcome !.</h2>
                <a href="#" className='view-profile'>View Profile</a>

                <p className='card1-text'><WiThermometerExterior className='card1-icon' />Outdoor Temp.<span className='temperature-in-degree'> 35°C</span></p>
                <p className='card1-text'><WiCloud className='card1-icon' />Fuzzy Cloud Weather</p>
            </div>
        </div>
    )
}

export default Profile
