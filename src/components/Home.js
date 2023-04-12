import React from 'react'
import '../css/Home.css'

import userInfo from '../helper/User.js'

export default function Home() {
    
    return (
        <div class="home">
            <div class="content">
                <h1>
                    Certx Gen - The Ultimate Certificate Generator
                </h1>
                <ul>
                    <li>
                        <p>
                            Introducing our new certificate generator app that makes it easier than ever to create and
                            distribute professional-looking certificates to your event attendees. With our app, you can
                            quickly generate certificates on the fly for each participant.
                        </p>
                    </li>
                    <li>
                        <p>
                            Using a CSV file, you can easily import your participant list and the provide necessary details
                            such as dates and event names. Our app then uses this information to generate personalized
                            certificates in real-time, making it ideal for events with a large number of participants.
                        </p>
                    </li>
                    <li>
                        <p>
                            Our app generates certificates on client side that creates each certificate on the fly,
                            ensuring that you don't need to store bulk images for each certificate. This not only saves you
                            storage space but also makes it easier to manage and distribute certificates.
                        </p>
                    </li>
                    <li>
                        <p>
                            So why wait? Try our certificate generator app today and streamline the certificate creation
                            process for your events.
                        </p></li>
                </ul>

            </div>
        </div >
    )
}