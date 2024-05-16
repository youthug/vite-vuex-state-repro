import {resetRouter} from "../../router";

export default {
    namespaced: true,
    state: {
        name: '',
        roles: [],
    },
    mutations: {
        setName(state, name) {
            state.name = name
        },
        setRoles(state, roles) {
            state.roles = roles
        },
        changeRole() {
            // Here is a circular reference.
            resetRouter()
        }
    }
}
