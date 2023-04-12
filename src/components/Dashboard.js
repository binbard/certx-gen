import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dashmenu from './Dashmenu'

import userQuery from '../helper/User.js'

export default function Dashboard() {
    const navigate = useNavigate()

    let isLoggedIn = userQuery.isLoggedIn()

    if (isLoggedIn === false) {
        alert("You are not logged in!")
        navigate("/");
        window.location.href = "/"
    }

    return (
        <div class="dashboard">
            
            <Dashmenu />
        </div>
        
    )

}