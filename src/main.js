import Vue from 'vue'
import vueRouter from 'vue-router'
import list from './list.vue'
import show from './item.vue'
import App from './App.vue'
Vue.use(vueRouter)
const router = new vueRouter({
  routes: [
  {path:'/',component: list},
  {path:'/show/:id' , component: show}
]

})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
