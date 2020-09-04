const _TOKEN = "TOKEN";
const _defaultToken = {
    lastLoginTime: null,
    role: null,
    isAuth:false
}
const roles = {
    "user@test.com": "user",
    "admin@test.com": "admin"
}
export const getAuthToken = () => {
    //getting current token
    const curToken = JSON.parse(localStorage.getItem(_TOKEN));   
    return curToken ? curToken : _defaultToken ;
}

export const login = (user) => {    
    let message = null,success = false;
    //if role of the user trying to log in is found, create a new token
    if (roles[user]) {
        console.log("User Role found.. creating new token!");
        localStorage.setItem(_TOKEN, JSON.stringify({
            lastLoginTime: new Date(),
            role: roles[user],
            isAuth:true
        }));
        success = true;
        message = "Auth token created";
    }else{
        success = false;
        message = "Invalid User";
    }
    return {authToken : getAuthToken(),response:{success,message}};
}

export const logout = () => {
    localStorage.removeItem(_TOKEN);
    return getAuthToken();
}