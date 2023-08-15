import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css'
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { date, currency } from './methods/filters';

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(VueAxios, axios);
app.component('LoadingOverlay', Loading)
app.use(router);
app.config.globalProperties.$filters = {
  date,
  currency,
};
app.mount('#app');
