import React from 'react'
import '../css/Home.css'

import userInfo from '../helper/User.js'

export default function Home() {

    return (
        <div className="home">
            <div className="content">
                <h1>
                    eCertify - The Ultimate Certificate Generator
                </h1>
                <button>
                    <a href="download" id="btn-gs">Download your Certificate</a>
                </button>
                <br /><br />
                <ul>
                    <li>
                        <p>
                            Introducing our new certificate generator app that makes it easier than ever to create and
                            distribute professional-looking certificates to your event attendees.
                        </p>
                    </li>
                    <li>
                        <p>
                            Hassle free image generation from our app, you can create certificates for your events in
                            minutes.
                        </p>
                    </li>
                    <li>
                        <p>
                            Our app generates certificates on client side that creates each certificate on the fly,
                            ensuring that you don't need to store bulk images for each certificate.
                        </p>
                    </li>
                    <li>
                        <p>
                            So why wait? Try our certificate generator app today and break the certificate creation
                            process for your events.
                        </p></li>
                </ul>

            </div>
        </div >
    )
}