import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '@picocss/pico'
import '../css/Nav.css'

import userQuery from '../helper/User.js'

export default function Nav() {
    const navigate = useNavigate()

    let isLoggedIn = userQuery.isLoggedIn()
    // alert(isLoggedIn)
    let userid = userQuery.getUser()

    return (
        <nav>
            <ul>
                <li><a href="#" className="secondary" onClick={() => { navigate("/") }}>Home</a></li>
            </ul>
            <ul>
                <li><>eCertify</></li>
            </ul>
            {isLoggedIn ? (
                    <ul>
                        <li><a href="#" className="secondary" onClick={() => { navigate("/dashboard/events") }}>
                        <sup>({userid}) </sup>
                            Dashboard
                            </a></li>
                    </ul>
            ) : (
                <ul>
                    <li><a href="#" className="secondary" onClick={() => { navigate("/login") }}>Login</a></li>
                </ul>
            )}
        </nav>
    )
}