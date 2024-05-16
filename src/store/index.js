import Vuex from "vuex";
import Vue from 'vue'

Vue.use(Vuex);

const modulesFiles = import.meta.glob('./modules/**/*.js', { eager: true })

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = Object.keys(modulesFiles).reduce((modules, modulePath) => {
    // set './app.js' => 'app'
    const moduleName = modulePath.replace(/^.*\/(.*)\.\w+$/, '$1')
    const value = modulesFiles[modulePath]
    modules[moduleName] = value.default
    return modules
}, {})

const store = new Vuex.Store({
    modules,
    getters: {
        name: state => state.user.name,
        roles: state => state.user.roles,
    }
})

export default store;
