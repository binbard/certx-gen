import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/DashEvents.css'

import userQuery from '../helper/User.js'

export default function DashEvents() {
    const navigate = useNavigate()

    return (
        <div class="events">
            <h2 class="subtitle">Events</h2>
            <div class="content">
                <table>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Event</th>
                            <th scope="col">Date</th>
                            <th scope="col">Participants</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Getting Started with AWS</td>
                            <td>12 Oct 22</td>
                            <td>108</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Sustainable Development Workshop</td>
                            <td>10 Dec 22</td>
                            <td>94</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Webathon 2.0</td>
                            <td>5 Apr 23</td>
                            <td>104</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    )

}