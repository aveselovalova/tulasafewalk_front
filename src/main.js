// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyCAfFiWIqxOdVQkOsqm3TDuRpukuFpA1zc',
		libraries: 'places'
	}
})