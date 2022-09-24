# Installation process ( works on with laravel 8.x it does not work with laravelv 9.* as that uses vite)

    composer create-project laravel/laravel basic "8.*"
    cd basic
    composer require laravel/ui 
    php artisan ui bootstrap --auth    
    npm install resolve-url-loader@^5.0.0 --save-dev --legacy-peer-deps
    npm install && npm run 
    
    npm install ui vue
    npm install vue-loader@^15.9.8 --save-dev --legacy-
    npm run dev

    npm install autoprefixer@10.4.5 --save-exact

#   Installing vue-router, vuex, vue-axios
    npm install vue-template-compiler vue-loader vue-router vue-axios --save-dev --legacy-peer-deps

# upgrading from vue2.* to vue3.*

    npm i --save vue@next
    npm i --save-dev vue-loader@next
    npm i vue-template-compiler@latest --save

 #  app.js
    import { createApp } from 'vue';

    import HelloWorld from './components/ExampleComponent';   

    const app = createApp({});

    app.component('example-component', HelloWorld);

    app.mount('#app');
# create model, migration and controller
    php artisan make:model Student -mc

#   setup the migrations
#   setup the model with properties protected $table and protected $fillables
#   setup the route
#   setup the controller and passon the scope variable
#   setup the view and add component <student-form-component></student-form-component>
#   create <student-form-component></student-form-component> in js/components
#   using element-ui  from https://element.eleme.io/#/en-US rather than bootstrap
    npm i element-ui -S --legacy-peer-deps - for vue2
    npm i element-plus -S --legacy-peer-deps - for vue3
    npm install vuetify
#   Using primevue ui components library https://www.primefaces.org/primevue/setup
    npm install primevue@^3.15.0 --save

    npm install primeicons --save

    import 'primeicons/primeicons.css';
    <i class="pi pi-check" style="font-size: 2rem"></i>

#   explore various vue3 components libraries and use one which you like
#   configure the component in app.js and call it whereever required


## About basic

basic is a web application using vue and bootstrap login/registeration modules for loggin clients in and out of the web app.


## Learning Laravel
