import * as Realm from 'realm-web';

const APP_ID = 'application-0-akmie';
const app = new Realm.App({ id: APP_ID });

const graphqlUri = `https://ap-south-1.aws.realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`

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
        body: JSON.stringify({
            query: gquery
        })
    });
    const res = await response.json();
    if(res.data===undefined) {
        console.log("Temporary Blocked")
        return null
    }
    return res.data.events
}

const downUtils = { fetchGraphql }

export default downUtils;