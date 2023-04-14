import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/DashEvents.css'

import eventUtils from '../helper/Events';


export default function DashEvents() {
    const navigate = useNavigate();

    const [eventList, setEventList] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await eventUtils.getEvents();
            if (data === null) setEventList([]);
            else setEventList(data);
        }
        fetchData();
    }, []);


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
