import { createApp } from "vue";
import App from "./App.vue";

// mitt를 사용하여 멀리 있는 컴포넌트에 데이터를 전송함
import mitt from "mitt";
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

app.mount("#app");
