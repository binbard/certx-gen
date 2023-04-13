import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import userQuery from '../helper/User.js'
import '../css/Dashboard.css'
import Dashmenu from './Dashmenu'
import DashAddEvent from './DashAddEvent.js';

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
            <Outlet />
        </div>

    )

}