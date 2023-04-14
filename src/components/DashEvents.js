import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/DashEvents.css'

import gql from 'graphql-tag';
import * as Realm from 'realm-web';
import updateUtils from '../helper/Updater';
import userQuery from '../helper/User';



export default function DashEvents() {
    const navigate = useNavigate();
    
    React.useState(() => {
        userQuery.getValidAccessToken().then((token) => {
            updateUtils.fetchEvents(token).then((data) => {
                setEventList(data.data.events);
            })
        });
    }, []);

    const [eventList, setEventList] = React.useState([]);


    return (
        <div className="events">
            <h2 className="subtitle">Events</h2>
            <div className="content">
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
                        {eventList.map((event, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{event.eventName}</td>
                                <td>{event.eventDate}</td>
                                <td>{event.totalParticipants}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
