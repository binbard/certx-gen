import React from 'react'
import '../css/Dashmenu.css'

import userInfo from '../helper/User.js'

export default function Dashmenu() {

    if (window.innerWidth < 800) {
        return (<></>)
    }
    else {
        return (
                <div class="dashmenu">
                    <ul>
                        <li><a href="#" class="secondary">Events</a></li>
                        <li><a href="#" class="secondary">Add Event</a></li>
                        <li><a href="#" class="secondary">Settings</a></li>
                        <li><a href="#" class="secondary">Logout</a></li>
                    </ul>
                </div>
        )
    }

}