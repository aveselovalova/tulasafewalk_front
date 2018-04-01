import Vue from 'vue';
import App from './App.vue';
import Logo from './Logo.vue'
import AppTitle from './AppTitle.vue'
import Legend from './Legend.vue'
import Gmap from './Gmap.vue'
import Announce from './Announce.vue'
import FullPage from 'vue-fullpage.js/src/FullPage';
import $ from 'jquery'
import './assets/css/style.css'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.config.productionTip = false;
Vue.component('logo', Logo)
Vue.component('app-title', AppTitle)
Vue.component('map-legend', Legend)
Vue.component('gmap', Gmap)
Vue.component('full-page', FullPage.default);
Vue.component('announce', Announce);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCAfFiWIqxOdVQkOsqm3TDuRpukuFpA1zc',
        libraries: 'visualization',
    }
})

new Vue({
    el: '#app',
    components: {
        App,
        Logo,
        AppTitle,
        Legend,
        Gmap,
        FullPage
    },
})