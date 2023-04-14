import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Login.css'

import userQuery from '../helper/User.js'


export default function Login() {

    const navigate = useNavigate()

    async function handleLogin(e) {
        e.preventDefault();

        let userid = document.getElementById("userid").value;
        let userpass = document.getElementById("userpass").value;
        let rem = document.getElementById("usermem").checked;

        if(await userQuery.login(userid, userpass, rem) == true) {
            navigate("/dashboard");
        }
        else{
            alert("Invalid credentials");
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
                        id="userid"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        autocomplete="password"
                        id="userpass"
                        minLength="3"
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