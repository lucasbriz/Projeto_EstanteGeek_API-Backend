import { createApp } from 'vue'
//import App from './App.vue'
import router from './router'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'

//createApp(App).use(router).mount('#app')
createApp(NavBar).use(router).mount('#app')
