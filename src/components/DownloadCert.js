import React, { useEffect, useState } from "react";
import '../css/DownloadCert.css'

export default function DownloadCert() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query {
                        events {
                            eventName
                            certificateUrl
                            xpos
                            ypos
                            eventDate
                            participants
                            totalParticipants
                        }
                    }
                `
            })
        })
        .then(response => response.json())
        .then(data => setEvents(data.data.events));
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
                        {events.map(event => (
                            <option value={event.eventName}>{event.eventName}</option>
                        ))}
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
