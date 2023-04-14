import * as Realm from "realm-web";

const userInfo = {}

function setUser(userid, userpass, rem) {
    if (userid == undefined || userpass == undefined) { return }
    if (rem == true) {
        localStorage.setItem("userid", userid);
        localStorage.setItem("userpass", userpass);
    }
    userInfo.userid = userid;
    userInfo.userpass = userpass;
}

function getUser() {
    if (userInfo.userid == undefined || userInfo.userpass == undefined) {
        if (localStorage.getItem("userid") != undefined) {
            userInfo.userid = localStorage.getItem("userid");
            userInfo.userpass = localStorage.getItem("userpass");
        }
    }
    return userInfo.userid;
}

function login(userid, userpass, rem) {
    setUser(userid, userpass, rem)

    if (getUser() != undefined) {
        return true;
    }
}

function isLoggedIn() {
    if (userInfo.userid == undefined) {
        if (localStorage.getItem("userid") != undefined) {
            userInfo.userid = localStorage.getItem("userid");
            userInfo.userpass = localStorage.getItem("userpass");
        }
    }
    if (userInfo.userid != undefined && userInfo.userpass != undefined) {
        return true;
    }
    return false;
}

// async function getValidAccessToken() {
//     if (!isLoggedIn()) {
//         return null;
//     }
//     if (!app.currentUser) {
//         await app.logIn(Realm.Credentials.emailPassword(userInfo.userid, userInfo.userpass));
//     } else {
//         await app.currentUser.refreshAccessToken();
//     }
//     return app.currentUser.accessToken;
// }

function logout() {
    userInfo.userid = undefined;
    userInfo.userpass = undefined;
    localStorage.removeItem("userid");
    localStorage.removeItem("userpass");
    window.location.href = "/"
}

const userQuery = { setUser, getUser, isLoggedIn, logout }

export default userQuery
