import React from "react";
import '../css/DownloadCert.css'

export default function DownloadCert() {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div id="download-cert">
            <form onSubmit={handleSubmit}>
                <h2>Download Certificate</h2>
                <label for="pid">Enter your id:
                    <input name="pid" type="text" />
                </label>
                <label for="event">
                    Event:
                    <select name="event">
                        <option value="">--Select an Event--</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
