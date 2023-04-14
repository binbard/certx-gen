async function fetchGraphql(gquery) {
    const token = await userQuery.getValidAccessToken();
    const response = await fetch('https://realm.mongodb.com/api/client/v2.0/app/application-0-akmie/graphql', {
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
    return res;
}