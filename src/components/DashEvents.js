import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/DashEvents.css'

import gql from 'graphql-tag';
import * as Realm from 'realm-web';
import updateUtils from '../helper/Updater';

const GET_EVENTS_QUERY = gql`
  query {
    events {
      eventName
      eventDate
      totalParticipants
    }
  }
`;

const APP_ID = 'application-0-akmie';
const app = new Realm.App({ id: APP_ID, baseUrl: 'https://realm.mongodb.com' });

async function getValidAccessToken() {
    if (!app.currentUser) {
        await app.logIn(Realm.Credentials.emailPassword('harshitjawla123@gmail.com', 'notok123'));
    } else {
        await app.currentUser.refreshAccessToken();
    }
    return app.currentUser.accessToken;
}


export default function DashEvents() {
    const navigate = useNavigate();

    getValidAccessToken().then((token) => {
        console.log(token);
        updateUtils.fetchEvents(token).then((data) => {
            setEventList(data.data.events);
        })
    });

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
