import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

import 'element-ui/lib/theme-chalk/index.css';
import routes from './routes/index.js'

Vue.use(Button)
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };


Vue.use(VueRouter)
Vue.config.productionTip = false

console.log(routes)
const router =  new VueRouter({
  mode: 'history',
  routes:routes
})
new Vue({
  router,
  render: h=>h(App)
  
}).$mount('#app')
