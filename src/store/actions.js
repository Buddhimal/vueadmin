import axios from "axios";
import state from "@/store/state";

export const setClients = ({commit}) => {
    axios.post(process.env.VUE_APP_API_BASE_URL+'get_client_org_list_by_user', {
        api_user_id: state.api_user_id,
        api_key: state.api_key,
        ui_user_id: state.ui_user_id,
    }).then((resp) => {
        commit('SET_CLIENTS', resp.data.data);
    })
}

export const setAuthenticated = ({commit}, status) => {
    commit('SET_AUTHENTICATED', status);
}