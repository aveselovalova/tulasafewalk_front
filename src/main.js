import Vue from 'vue';
import App from './App.vue';
import Logo from './components/Logo.vue'
import AppTitle from './components/AppTitle.vue'
import Legend from './components/Legend.vue'
import DateSelector from './components/Date-selector.vue'
import Gmap from './components/Gmap.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.config.productionTip = false;
Vue.component('logo', Logo)
Vue.component('app-title', AppTitle)
Vue.component('date-selector', DateSelector)
Vue.component('map-legend', Legend)
Vue.component('gmap', Gmap)

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCAfFiWIqxOdVQkOsqm3TDuRpukuFpA1zc',
        libraries: 'places',
    }
})

new Vue({
    el: '#app',
    components: {
        App,
        Logo,
        AppTitle,
        DateSelector,
        Legend,
        Gmap
    },
})