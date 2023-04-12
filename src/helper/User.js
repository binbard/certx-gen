const userInfo = {}

function setUser(userid, userpass, rem) {
    if(rem == true) {
        localStorage.setItem("userid", userid);
        localStorage.setItem("userpass", userpass);
    }
    userInfo.userid = userid;
    userInfo.userpass = userpass;
}

function getUser() {
    if (userInfo.userid == undefined) {
        if (localStorage.getItem("userid") != undefined) {
            userInfo.userid = localStorage.getItem("userid");
            userInfo.userpass = localStorage.getItem("userpass");
        }
    }
    return userInfo.userid;
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

function logout() {
    userInfo.userid = undefined;
    userInfo.userpass = undefined;
}

const userQuery = { setUser, getUser, isLoggedIn, logout }

export default userQuery
