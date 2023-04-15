import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import '@picocss/pico'
import '../css/Nav.css'

import userQuery from '../helper/User.js'

export default function Nav() {
    const navigate = useNavigate()
    const location = useLocation()

    const [isLoggedIn, setIsLoggedIn] = React.useState(userQuery.isLoggedIn())
    const [userid, setUserid] = React.useState(userQuery.getUser())
    const [navText, setNavText] = React.useState("")
    const [RedirectTo, setRedirectTo] = React.useState("")


    React.useEffect(() => {
        if (location.pathname === '/dashboard') {
            navigate('/dashboard/events')
        }
        if (location.pathname === "/download") {
            setNavText("≡")
            setRedirectTo("/download")
        } else {
            setNavText("Admin Login")
            setRedirectTo(location.pathname !== "/login" ? "/login" : "")
        }
    }, [location])

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
                    <li>
                        <a href="#" className="secondary" onClick={() => { navigate("/dashboard/events") }}>
                            <sup>({userid}) </sup>
                            Dashboard
                        </a>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <a href="#" className="secondary" onClick={() => { navigate(RedirectTo) }}>
                            {navText}
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    )
}
