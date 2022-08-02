require('./bootstrap');
// import vue from 'vue'
// window.Vue = vue;

// import App from './components/App.vue';
// import VueRouter from 'vue-router';
// import VueAxios from 'vue-axios';
// import axios from 'axios';
// import {routes} from './routes';
 
// Vue.use(VueRouter);
// Vue.use(VueAxios, axios);
 
// const router = new VueRouter({
//     mode: 'history',
//     routes: routes
// });
 
// const app = new Vue({
//     el: '#app',
//     router: router,
//     render: h => h(App),
// });

import { createApp } from 'vue'
import HelloWorld from './components/Welcome'

const app = createApp({})

app.component('hello-world', HelloWorld)

app.mount('#app')