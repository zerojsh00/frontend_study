import { createApp } from "vue";
import App from "./App.vue";

// mitt를 사용하여 멀리 있는 컴포넌트에 상태를 전송함
import mitt from "mitt";
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

// vuex를 쓰기 위함
import store from "./store.js";

app.use(store).mount("#app");
