import Vue from 'vue'
import App from './App.vue'
import './styles/reset.css'
// 引入 element-ul
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 使用组件库
Vue.use(ElementUi)
// 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
