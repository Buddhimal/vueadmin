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

export const removeOrganization = async (context,org_name) =>{

    return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_API_BASE_URL+'delete_org', {
            api_user_id: state.api_user_id,
            api_key: state.api_key,
            ui_user_id: state.ui_user_id,
            client_name_short: state.client_name_short,
            organization_name_short: org_name
        }).then(response => {
            resolve(response);
        }, error => {
            reject(error);
        })
    })
}

export const addOrganization = async (context,org_name) =>{

    return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_API_BASE_URL+'add_org', {
            api_user_id: state.api_user_id,
            api_key: state.api_key,
            ui_user_id: state.ui_user_id,
            client_name_short: state.client_name_short,
            organization_name_full: org_name
        }).then(response => {
            resolve(response);
        }, error => {
            reject(error);
        })
    })
}