import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'echarts';
import ECharts from 'vue-echarts'

import './assets/global.less'
import  'echarts-wordcloud'

import dataV from '@jiaminghi/data-view'

Vue.config.productionTip = false
Vue.use(dataV)
Vue.component('ECharts', ECharts)


new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
