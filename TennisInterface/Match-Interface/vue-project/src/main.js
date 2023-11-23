import './assets/main.css'
import Loggedin from "./components/Loggedin.vue"
import LoginForm from "./components/LoginForm.vue"
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        component: LoginForm,
      },
      {
        path: "/home",
        component: Loggedin,
      }
    ],
});

app.use(router);

app.mount("#app");
