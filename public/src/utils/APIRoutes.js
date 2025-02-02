export const host = "http://localhost:8080";

export const loginRoute = `${host}/api/auth/login`;
export const registerRoute = `${host}/api/auth/register`;
export const logoutRoute = `${host}/api/auth/logout`;
export const allUsersRoute = `${host}/api/auth/allusers`;
// export const sendMessageRoute = `${host}/api/messages/addmsg`;
// export const recieveMessageRoute = `${host}/api/messages/getmsg`;
export const sendMessageRoute = `http://localhost:7001/api/v1/messages/add`;
export const recieveMessageRoute = `http://localhost:7001/api/v1/messages/get`;

export const setAvatarRoute = `${host}/api/auth/setavatar`;
