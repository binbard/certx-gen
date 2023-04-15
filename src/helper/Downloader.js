import * as Realm from 'realm-web';

const APP_ID = 'application-0-akmie';
const app = new Realm.App({ id: APP_ID });

const graphqlUri = `https://ap-south-1.aws.realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`

const mendpoint = 'https://ap-south-1.aws.data.mongodb-api.com/app/application-0-akmie/endpoint'

async function getDownAccessToken() {
    if (!app.currentUser) {
        console.log("Logged in anonymously")
        await app.logIn(Realm.Credentials.anonymous());
    } else {
        console.log("Refreshing acc")
        await app.currentUser.refreshAccessToken();
    }
    console.log(app.currentUser)
    return app.currentUser.accessToken;
}

async function fetchGraphql(gquery) {
    const token = await getDownAccessToken();
    const response = await fetch(graphqlUri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: gquery
    });
    const res = await response.json();
    console.log(res)
    if (res.data === undefined) {
        console.log("Temporary Blocked")
        return null
    }
    return res.data
}

async function getEventsList() {
    const query = `
        query {
            events {
                _id
                eventName
            }
        }
    `
    const gquery = JSON.stringify({ query })
    const response = await downUtils.fetchGraphql(gquery)
    if (response === null) return null;
    else return response.events;
}

async function getMatchedCert(pid, eventId) {
    console.log(pid, eventId)
    if (pid=='' || eventId=='' || eventId==undefined) return null;
    const endpointUri = mendpoint + '/get_cert' + `?eventId=${eventId}&participantId=${pid}`
    console.log(endpointUri)
    const response = await fetch(endpointUri);
    if (!response) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    return res;
}


const downUtils = { fetchGraphql, getEventsList, getMatchedCert }

export default downUtils;