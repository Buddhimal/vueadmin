import Vue from 'vue'
import Vuex from 'vuex'
import state from "@/store/state";
import * as getters from "@/store/getters";
import * as actions from "@/store/actions";
import * as mutations from "@/store/mutations";

Vue.use(Vuex);

export default new Vuex.Store({
        state,
        getters,
        mutations,
        actions
    }
)

