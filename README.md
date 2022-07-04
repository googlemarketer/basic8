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

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[OP.GG](https://op.gg)**
- **[WebReinvent](https://webreinvent.com/?utm_source=laravel&utm_medium=github&utm_campaign=patreon-sponsors)**
- **[Lendio](https://lendio.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
