import React, { useEffect, useState } from "react";
import '../css/DownloadCert.css'

import downUtils from "../helper/Downloader";


export default function DownloadCert() {
    const [events, setEvents] = useState([]);
    const [certDetails, setCertDetails] = useState(null);

    useEffect(() => {
        downUtils.getEventsList().then(res => {
            if (res === null) setEvents([])
            else setEvents(res);
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const pid = e.target.pid.value;
        const eventId = events[e.target.event.selectedIndex - 1]._id;

        const msg = document.getElementById("down-msg");
        const dbtn = document.getElementById("down-btn");

        const certDetails = await downUtils.getMatchedCert(pid, eventId);
        setCertDetails(certDetails);
        console.log(certDetails);
        if (certDetails.status === "success") {
            msg.innerText = "Certificate found!";
            msg.style.color = "green";
            dbtn.style.visibility = "visible";
        }
        else {
            msg.innerText = "No certificate found";
            msg.style.color = "red";
        }
        msg.style.visibility = "visible";
    };


    return (
        <div id="download-cert">
            <form onSubmit={handleSubmit}>
                <h2>Download Certificate</h2>
                <label htmlFor="pid">Enter your id:
                    <input name="pid" type="text" />
                </label>
                <label htmlFor="event">
                    Event:
                    <select name="event" id="input_event">
                        <option value="">--Select an Event--</option>
                        {events.map((event) => (
                            <option value={event.eventName} key={event._id}>{event.eventName}</option>
                        ))}
                    </select>
                </label>
                <button type="submit">Submit</button>

                <p id="down-msg">X</p>

            </form>
            <button id="down-btn">Download</button>
        </div>
    );
};
