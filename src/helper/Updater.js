import * as Realm from 'realm-web';

const app = new Realm.App({ id: 'application-0-akmie', baseUrl: 'https://realm.mongodb.com' });

function Login({ setUser, app }) {
    const loginAnonymous = async () => {
        const user = await app.logIn(Realm.Credentials.anonymous());
        setUser(user);
    };
    const loginUser = async () => {
        const email = "goonhacker0@gmail.com";
        const password = "pahgal123";
        const user = Realm.Credentials(Realm.Credentials.emailPassword(email, password));
        setUser(user);
    };
}

async function saveEventData(data) {
    await app.logIn(Realm.Credentials.emailPassword('harshitjawla123@gmail.com', 'notok123'));
    const user = app.currentUser;

    const mongodb = app.currentUser.mongoClient('mongodb-atlas');
    const eventsCollection = mongodb.db('ecertify').collection('events');

    const { eventName, certificateUrl, xpos, ypos, eventDate, participants, totalParticipants } = data

    const result = await eventsCollection.updateOne({ eventName }, {
        $set: {
            certificateUrl,
            xpos,
            ypos,
            eventDate,
            participants,
            totalParticipants
        }
    }, { upsert: true });

    if (!result.matchedCount) {
        console.log(`Adding new event  ${eventName}`);
    }
    else {
        console.log(`Updated ${result.modifiedCount} event ${eventName}`);
    }
}

function composeData(pos, parti) {
    const data = {
        eventName: document.getElementById('inputeventname').value,
        certificateUrl: document.getElementById('inputcert').value,
        xpos: pos.x,
        ypos: pos.y,
        eventDate: document.getElementById('inputdate').value,
        participants: parti,
        totalParticipants: parti.length
    }

    return data
}

async function fetchEvents(token) {
    // const token = await Realm.getApp('application-0-akmie').logIn(Realm.Credentials.emailPassword('username', 'password'));
    const response = await fetch('https://realm.mongodb.com/api/client/v2.0/app/application-0-akmie/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            query: `
          query {
            events {
              eventName
              eventDate
              totalParticipants
            }
          }
        `
        })
    });
    return response.json();
}


const updateUtils = { saveEventData, composeData, fetchEvents, Login }

export default updateUtils;