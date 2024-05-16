import store from "../store";

export function hasRole(roles, from) {
    if (!roles.length) return true;
    console.log(`store.getters in \`checkPermission\` (called by "${from}"):`, {...store.getters})
    return store.getters.roles.some(role => roles.includes(role))
}
