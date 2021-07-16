import Vue from 'vue'
import App from './App.vue'
import {http} from './http';
import store from './store';

import VueMask from 'v-mask';

Vue.config.productionTip = false
Vue.use(VueMask);

new Vue({
  store,
  http,
  render: h => h(App),
}).$mount('#app')
