import { createApp } from "vue";
import App from "./App.vue";
import icons from "./components/icons/all";
import Modal from "./components/toast/Modal.vue"
import Toast from "./components/toast/Toast.vue"


const app = createApp(App);

// Register all icons
for (const [key, value] of Object.entries(icons)) {
  app.component(key, value);
}

app.component("app-toast",Toast);
app.component("app-modal",Modal)
app.mount("#app");
