//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Tagsinput from "./components/Tagsinput.vue"

const app = createApp(App)

app.component('tags-input',Tagsinput)

.mount('#app')
