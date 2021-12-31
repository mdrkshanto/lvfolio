require('./bootstrap');


import Form from "vform";
window.Form = Form;
import Vuex from "vuex/dist/vuex";
Vue.use(Vuex);


Vue.component('Users', require('../components/frontEnd/master/index').default)
Vue.component('Admin', require('../components/backEnd/master/index').default)

import storeData from './store'
const store = new Vuex.Store(storeData);

import { routes } from './routes';

const router = new VueRouter({
    mode: 'history',
    routes
})


router.beforeEach((to, from, next) => {
    document.title = 'Shanto' + ' | ' + to.meta
    next()
})

const app = new Vue({ router, store }).$mount('#app')
