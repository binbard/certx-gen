import React, { useEffect, useState } from "react";
import '../css/DownloadCert.css'

import downUtils from "../helper/Downloader";

async function getEventsList() {
    const query = `
        query {
            events {
                eventName
            }
        }
    `
    const res = await downUtils.fetchGraphql(query)
    console.log(res)
    if(res===null) {
        console.log("Temporary Blocked")
        return [];
    }
    else return res;
}

export default function DownloadCert() {
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        getEventsList().then(res => {
            setEvents(res);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    <select name="event">
                        <option value="">--Select an Event--</option>
                        {events.map((event,index) => (
                            <option value={event.eventName} key={index}>{event.eventName}</option>
                        ))}
                    </select>
                </label>
                <p id="down-msg"></p>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
