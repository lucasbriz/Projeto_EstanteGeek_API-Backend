import { createApp } from 'vue'
//import App from './App.vue'
import router from './router'
import NavBar from './components/NavBar'

//createApp(App).use(router).mount('#app')
createApp(NavBar).use(router).mount('#app')
