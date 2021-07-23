import Vue from 'vue'
import App from './App.vue'
import router from './router.js';
import mixins from './mixins';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  mixins
}).$mount('#app')
