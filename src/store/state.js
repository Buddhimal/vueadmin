export default {

    authenticated: localStorage.getItem("testLogin") == "true" ? true : false,
    api_base_url: "https://uids-a.tutlab.pw/uids/api/v1.0/",
    api_user_id: "ui_app_account",
    api_key: "7d3f86cdd7b247eb8ae9a709170c5f6715e975f23ffb45a8a79019bafb53310e031d227a1e194b8d8b0252863de5940e8dc7d65ad15f4bda9ab159f9b5d6189c",
    ui_user_id: localStorage.getItem("ui_user_id"),
    client_name_short: localStorage.getItem("client_name_short"),
    clients: [],
    count: 0

}