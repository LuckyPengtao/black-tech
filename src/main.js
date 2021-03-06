import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './icons'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

Vue.use(ElementUI,{size:'small'});

/*router.beforeEach((to, from, next) => {
    if (to.path == '/home') {
        next();
    }else {
        next('/?redirect='+to.path);
    }
})*/

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
