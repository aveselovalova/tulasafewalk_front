// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import MapContainer from './components/Map-container.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false;
Vue.component('map-container', MapContainer)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCAfFiWIqxOdVQkOsqm3TDuRpukuFpA1zc',
    libraries: 'places'
  }
})

new Vue({
  el: '#app',
  components: { App, MapContainer },
})

