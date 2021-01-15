import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { DatePicker } from 'ant-design-vue';
import { setupAntd } from '@/plugins/'

const app = createApp(App);
setupAntd(app);
app.use(DatePicker);
app.use(store).use(router).mount('#app')
