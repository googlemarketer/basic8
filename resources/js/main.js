/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


// window.Vue = require('vue').default;
import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';


import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css';  //core css
import 'primeicons/primeicons.css'; //icons css


const app = createApp(App);

app.use(PrimeVue);



app.mount('#vue-app');






/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('student-form-component', require('./components/StudentFormComponent.vue').default);


//import StudentFormComponent from './components/StudentFormComponent.vue';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#vue-app',
// });

//const app = createApp({App});



//app.mount('#vue-app');
