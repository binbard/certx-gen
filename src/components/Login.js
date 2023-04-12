import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Login.css'

import userQuery from '../helper/User.js'


export default function Login() {

    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault();

        let userid = document.getElementById("userid").value;
        let userpass = document.getElementById("userpass").value;
        let rem = document.getElementById("usermem").checked;

        if (userid === "admin123" && userpass === "admin123") {
            userQuery.setUser(userid, userpass, rem)
            // alert("Login successful");
            navigate("/");
        }
        else {
            alert("Wrong credentials");
        }
    }

    return (
        <div class="card">
            <center>
                <form onSubmit={(e) => handleLogin(e)}>
                    <input
                        type="text"
                        name="login"
                        placeholder="Login"
                        autocomplete="id"
                        maxLength="10"
                        id="userid"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        autocomplete="password"
                        id="userpass"
                        maxLength="10"
                        required
                    />
                    <fieldset>
                        <label for="remember">
                            <input type="checkbox" role="switch" id="usermem" name="remember" />
                            Remember me
                        </label>
                    </fieldset>
                    <button type="submit" class="contrast" onclick="event.preventDefault()">Login</button>
                </form>
            </center>
        </div>
    )
}