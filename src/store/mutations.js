export const SET_CLIENTS = (state, clients) => {
    state.clients = clients;
}
export const SET_AUTHENTICATED = (state, status) => {
    state.authenticated = status;
    localStorage.setItem("testLogin", status);
}