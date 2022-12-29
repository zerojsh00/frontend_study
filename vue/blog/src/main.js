import { createApp } from "vue";
import App from "./App.vue";

// bootstrap을 설치 후 import함
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// vue-router를 설치(npm install vue-router@4) 후 router를 정의하여 import함
import router from "./router.js";

// router를 사용하기 위해서 아래와 같이 .use(router)를 추가함
createApp(App).use(router).mount("#app");
